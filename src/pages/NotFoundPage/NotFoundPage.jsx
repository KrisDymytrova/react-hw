import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Typography } from '@mui/material';
import BaseTemplate from '../../templates/BaseTemplate';
import NavMenu from '../../components/NavMenu';

const NotFoundPage = () => {
    useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <BaseTemplate className={'not-found-page'}>
            <NavMenu />
            <Typography variant="h3" align="center" gutterBottom>
                Page Not Found
            </Typography>
        </BaseTemplate>
    );
};

export default NotFoundPage;