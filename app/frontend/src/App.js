import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { LoginForm } from './pages/LoginForm';

const App = () => {
    const [user, setUser] = useState(null);
    const token = window.localStorage.getItem('token');

    useEffect(() => {
        if (user) return;
        axios({
            method: 'GET',
            url: 'http://localhost:3001/me',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(
            (res) => setUser(res.data),
            () => {
                window.localStorage.removeItem('token');
                setUser(null);
            }
        );
    }, [token, user]);
    if (!user && token) {
        return '...loading user';
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainPage
                            user={user}
                            logout={() => {
                                window.localStorage.removeItem('token');
                                setUser(null);
                            }}
                        />
                    }
                >
                    <Route
                        path="register"
                        element={
                            <LoginForm
                                endpoint="register"
                                onSuccess={setUser}
                            />
                        }
                    />
                    <Route
                        path="login"
                        element={
                            <LoginForm endpoint="login" onSuccess={setUser} />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
