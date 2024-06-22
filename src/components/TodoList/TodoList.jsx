import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';
import { getTodos, setTodos, removeTodos } from '../../utils/localStorage';
import uniqid from 'uniqid';
import styles from './TodoList.module.scss';

const DATA_KEY = 'data';

const TodoList = () => {
    const [todos, setTodosState] = useState([]);

    useEffect(() => {
        const savedTodos = getTodos(DATA_KEY);
        if (savedTodos) {
            setTodosState(savedTodos);
        }
    }, []);

    useEffect(() => {
        setTodos(DATA_KEY, todos);
    }, [todos]);

    const handleCreate = (newTodo) => {
        const id = uniqid();
        const updatedTodo = { id, ...newTodo };
        setTodosState((prevTodos) => [updatedTodo, ...prevTodos]);
    };

    const handleDelete = (id) => {
        setTodosState((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleDeleteAll = () => {
        setTodosState([]);
        removeTodos(DATA_KEY);
        localStorage.removeItem('currentId');
    };

    const handleStatusChange = (updatedTodo) => {
        const updatedTodos = todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodosState(updatedTodos);
    };

    return (
        <Container>
            <div className={styles.header}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <InventoryRoundedIcon fontSize="large"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="h1">
                            TODO LIST
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <TodoForm onCreate={handleCreate} deleteAllTodos={handleDeleteAll}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className={styles.tasksContainer}>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} {...todo} onDelete={handleDelete} showViewButton={true} onStatusChange={handleStatusChange} />
                        ))}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TodoList;





