import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LogoutButton from '../LogoutButton';
import styles from './NavMenu.module.css';

const NavMenu = () => {

    return (
        <AppBar position="static" className={styles.navMenu}>
            <Toolbar className={styles.navContent}>
                <div className={styles.navBlock}>
                    <Typography variant="h6">
                        <Link to="/" className={styles.navLink}>
                            Home Page
                        </Link>
                    </Typography>
                    <Link to="/all-todos" className={styles.navLink}>
                        Todos
                    </Link>
                </div>
                <LogoutButton />
            </Toolbar>
        </AppBar>
    );
};

export default NavMenu;


