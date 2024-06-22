import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button } from '@mui/material';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('loggedin');
        navigate('/login');
    };

    return (
        <Button
            variant="contained"
            color="error"
            onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
