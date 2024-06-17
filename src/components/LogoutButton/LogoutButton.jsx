import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { logout } from '../../utils/auth';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
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
