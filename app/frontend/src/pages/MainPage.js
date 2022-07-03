import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Outlet, Link } from 'react-router-dom';
import themes from '../utils/themes';
import { Calculator } from '../components/Calculator';

export const MainPage = ({ user, logout }) => {
    const [theme, setTheme] = useState('dark');
    const handleThemeChange = ({ target: { value } }) => setTheme(value);
    return (
        <ThemeProvider theme={themes[theme]}>
            <Calculator />
            <div style={{ marginTop: 30 }}>
                <fieldset>
                    <legend>Theme</legend>
                    <label>
                        <input
                            onChange={handleThemeChange}
                            checked={theme === 'light'}
                            type="radio"
                            name="theme"
                            value="light"
                        />{' '}
                        light
                    </label>
                    <label>
                        <input
                            onChange={handleThemeChange}
                            checked={theme === 'dark'}
                            type="radio"
                            name="theme"
                            value="dark"
                        />{' '}
                        dark
                    </label>
                </fieldset>
            </div>
            <div
                css={{
                    display: 'flex',
                    marginTop: 10,
                    marginBottom: 10,
                    justifyContent: 'space-around'
                }}
            >
                {user ? (
                    <>
                        <div data-testid="username-display">
                            {user.username}
                        </div>
                        <button type="button" onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
                <Outlet />
            </div>
        </ThemeProvider>
    );
};
