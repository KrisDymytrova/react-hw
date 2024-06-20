import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Select,
    MenuItem,
    Grid,
    InputLabel,
    OutlinedInput,
    FormControl
} from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './TodoItem.module.scss';

const TodoItem = ({ id, title, body, completed, onDelete, showViewButton, onStatusChange }) => {
    const [status, setStatus] = useState(completed);

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setStatus(newStatus);

        const updatedTodo = { id, title, body, completed: newStatus };
        onStatusChange(updatedTodo);
    };

    const handleClick = () => {
        onDelete(id);
    };

    return (
        <Card className={styles.taskWrapper}>
            <CardContent>
                <Typography variant="h5" component="div" className={styles.taskHeading}>
                    {title}
                </Typography>
                <Typography variant="body2" className={styles.taskDescription}>
                    {body}
                </Typography>
            </CardContent>
            <CardActions className={styles.buttonsContainer}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="status-select-label">
                                Change state
                            </InputLabel>
                            <Select
                                labelId="status-select-label"
                                id="status-select-label"
                                value={status}
                                input={<OutlinedInput label="Change state" />}
                                onChange={handleStatusChange}
                            >
                                <MenuItem value="completed">Completed</MenuItem>
                                <MenuItem value="not-completed">Not Completed</MenuItem>
                                <MenuItem value="pending">Pending</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} justifyContent="flex-end">
                            {showViewButton && (
                                <Grid item>
                                    <Button
                                        component={Link}
                                        to={`/todo/${id}`}
                                        variant="outlined"
                                        color="primary"
                                    >
                                        View
                                    </Button>
                                </Grid>
                            )}
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={handleClick}
                                >
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    showViewButton: PropTypes.bool.isRequired,
};

export default TodoItem;






