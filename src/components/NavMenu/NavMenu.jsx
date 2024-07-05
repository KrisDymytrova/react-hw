import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import styles from './NavMenu.module.scss';

const NavMenu = () => {
    return (
        <AppBar position="static" className={styles.navMenu}>
            <Toolbar className={styles.navContent}>
                <Box className={styles.navBlock}>
                    <Typography variant="h6">
                        <Link to="/" className={styles.navLink}>
                            Home Page
                        </Link>
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavMenu;
