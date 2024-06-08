import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';
import { getTodos, setTodos, removeTodos } from '../../LocalStorage/index';
import { generateId } from "../../generateId";

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
        const id = generateId();
        const updatedTodo = { ...newTodo, id };
        setTodosState(prevTodos => [...prevTodos, updatedTodo]);
    };

    const handleDelete = (id) => {
        setTodosState(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const handleDeleteAll = () => {
        setTodosState([]);
        removeTodos(DATA_KEY);
        localStorage.removeItem('currentId');
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
                    <TodoForm
                        onCreate={handleCreate}
                        deleteAllTodos={handleDeleteAll}
                    />
                </Col>
                <Col className="tasksContainer" md={8}>
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onDelete={handleDelete}
                        />
                    )).reverse()}
                </Col>
            </Row>
        </Container>
    );
};

export default TodoList;



















