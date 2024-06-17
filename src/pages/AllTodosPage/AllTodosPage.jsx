import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { getTodos } from '../../utils/localStorage';
import BaseTemplate from '../../templates/BaseTemplate';
import NavMenu from '../../components/NavMenu';
import styles from './AllTodosPage.module.css';


const AllTodosPage = () => {
    const todos = getTodos('data');

    return (
        <BaseTemplate className={'all-todos-page'}>
        <NavMenu />
        <Container className={styles.container}>
            <Typography variant="h4" component="h1" className={styles.heading} gutterBottom>
                All Todos
            </Typography>
            <Grid container spacing={3}>
                {todos.map((todo) => (
                    <Grid item key={todo.id} xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardContent className={styles.cardContent}>
                                <Typography variant="h5" component="div">
                                    {todo.title}
                                </Typography>
                                <Typography variant="body2">
                                    {todo.body}
                                </Typography>
                            </CardContent>
                            <Link to={`/todo/${todo.id}`} className={styles.link}>
                                View
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </BaseTemplate>
    );
};

export default AllTodosPage;
