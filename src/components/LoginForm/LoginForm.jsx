import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { TextField, Typography, Button, Container, Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Cookies from 'js-cookie';
import validationLoginForm from '../../utils/ValidationSchemas/validationLoginForm';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: validationLoginForm,
        onSubmit: (values) => {
            Cookies.set('loggedin', 'true');
            navigate('/');
        },
    });

    return (
        <Grid container className={styles.containerForm}>
            <Grid item>
                <Container className={styles.form}>
                    <Typography variant="h4" component="h1">
                        Login
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            id="login"
                            name="login"
                            label="Login"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formik.values.login}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.login && Boolean(formik.errors.login)}
                            helperText={formik.touched.login && formik.errors.login}
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
};

export default LoginForm;