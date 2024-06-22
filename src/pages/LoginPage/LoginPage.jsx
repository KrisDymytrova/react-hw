import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import LoginTemplate from '../../templates/LoginTemplate';
import Cookies from "js-cookie";

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get('loggedin') === 'true') {
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

