import React, { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    Snackbar,
    Alert,
    InputLabel,
    OutlinedInput, FormControl
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getTodos, setTodos } from '../../utils/localStorage';

const TodoItemEdit = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [completed, setCompleted] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const todos = getTodos('data');
        const selectedTodo = todos.find(todo => todo.id === id);

        if (selectedTodo) {
            setTitle(selectedTodo.title);
            setBody(selectedTodo.body);
            setCompleted(selectedTodo.completed);
        }
    }, [id]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleStatusChange = (event) => {
        setCompleted(event.target.value);
    };

    const handleSave = () => {
        const todos = getTodos('data');
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, title, body, completed } : todo
        );
        setTodos('data', updatedTodos);
        setOpenSnackbar(true);
    };

    const handleDelete = () => {
        const todos = getTodos('data');
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos('data', updatedTodos);
        navigate('/');
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="h2">
                        Edit Todo
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={handleTitleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        value={body}
                        onChange={handleBodyChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="status-select-label">
                            Change state
                        </InputLabel>
                        <Select
                            input={<OutlinedInput label="Change state" />}
                            multiline
                            variant="outlined"
                            fullWidth
                            value={completed}
                            onChange={handleStatusChange}
                        >
                            <MenuItem value="completed">Completed</MenuItem>
                            <MenuItem value="not-completed">Not Completed</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
                        Save Changes
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="error" fullWidth onClick={handleDelete}>
                        Delete
                    </Button>
                </Grid>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={2000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Changes saved successfully!
                    </Alert>
                </Snackbar>
            </Grid>
        </Box>
    );
};

export default TodoItemEdit;







