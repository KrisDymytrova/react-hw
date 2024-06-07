import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';
import { getTodos, setTodos } from '../../LocalStorage/index';

const DATA_KEY = 'data';

const TodoList = () => {
    const [todos, setTodosState] = useState([]);

    useEffect(() => {
        const savedTodos = getTodos(DATA_KEY);
        setTodosState(savedTodos);
    }, []);

    useEffect(() => {
        setTodos(DATA_KEY, todos);
    }, [todos]);

    const handleCreate = (newTodo) => {
        setTodosState([...todos, newTodo]);
    };

    const handleDelete = (id) => {
        setTodosState(todos.filter(todo => todo.id !== id));
    };

    const handleClearFields = () => {
        // This function is called to clear input fields in the form component
        // As it does not interact with todos state, it's empty here
    };

    const handleDeleteAll = () => {
        setTodosState([]);
        localStorage.removeItem(DATA_KEY); // Удаляем все задачи
        localStorage.removeItem('currentId'); // Сбросить текущий ID
    };

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1>TODO LIST</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <TodoForm onCreate={handleCreate} clearFields={handleClearFields} deleteAllTodos={handleDeleteAll} />
                </Col>
                <Col md={8}>
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onDelete={handleDelete}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default TodoList;


















