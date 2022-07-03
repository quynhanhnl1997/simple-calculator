import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Error } from '../components/Error';

export const LoginForm = ({ onSuccess, endpoint }) => {
    const [error, setError] = useState(null);
    const [formValues, setFormValues] = useState(null);
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            username: { value: username },
            password: { value: password }
        } = e.target.elements;
        setFormValues({ username, password });
    };

    useEffect(() => {
        if (!formValues) return;
        axios({
            method: 'POST',
            url: `http://localhost:3001/${endpoint}`,
            data: formValues
        }).then(
            ({ data: { user } }) => {
                window.localStorage.setItem('token', user.token);
                onSuccess(user);
                navigate('/');
            },
            (err) => setError(err)
        );
    }, [endpoint, formValues, onSuccess, navigate]);

    return (
        <form
            onSubmit={handleSubmit}
            css={{
                fontSize: 20,
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Input typeInput="username" />
            <Input typeInput="password" />
            <Button nameButton="Submit" />
            {error ? (
                <Error errorMessage="There was an error. Please try again" />
            ) : null}
        </form>
    );
};
