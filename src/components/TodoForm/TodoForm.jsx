import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Grid } from '@mui/material';
import { useFormik } from 'formik';
import validationTodoForm from '../../utils/ValidationSchemas/validationTodoForm';
import styles from './TodoForm.module.scss';

const TodoForm = ({ onCreate, deleteAllTodos }) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        validationSchema: validationTodoForm,
        onSubmit: (values, { resetForm }) => {
            const newTodo = {
                ...values,
                completed: false
            };
            onCreate(newTodo);
            resetForm();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.formGroup}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
            </div>

            <div className={styles.formGroup}>
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    id="body"
                    name="body"
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.body && Boolean(formik.errors.body)}
                    helperText={formik.touched.body && formik.errors.body}
                />
            </div>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >
                                Create
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="warning"
                                onClick={formik.handleReset}
                                fullWidth
                            >
                                Clear
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button
                        className={styles.deleteAllButton}
                        variant="contained"
                        color="error"
                        onClick={deleteAllTodos}
                        fullWidth
                    >
                        Delete All
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

TodoForm.propTypes = {
    onCreate: PropTypes.func.isRequired,
    deleteAllTodos: PropTypes.func.isRequired
};

export default TodoForm;

