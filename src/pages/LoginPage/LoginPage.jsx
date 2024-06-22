import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';
import LoginForm from '../../components/LoginForm';
import LoginTemplate from '../../templates/LoginTemplate';

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <LoginTemplate>
            <LoginForm />
        </LoginTemplate>
    );
};

export default LoginPage;

