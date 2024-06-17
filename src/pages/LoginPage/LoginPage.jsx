import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';
import LoginForm from '../../components/LoginForm';
import BaseTemplate from '../../templates/BaseTemplate';

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <BaseTemplate className={'login-page'}>
            <LoginForm />
        </BaseTemplate>
    );
};

export default LoginPage;

