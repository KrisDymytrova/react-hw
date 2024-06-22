import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import styles from './LoginTemplate.module.scss';

const LoginTemplate = ({ children }) => {
    return (
        <Container maxWidth="sm">
            <Box className={styles.innerBox}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Please log in to your account to continue.
                </Typography>
                <Box mt={4}>
                    {children}
                </Box>
            </Box>
        </Container>
    );
};

export default LoginTemplate;

