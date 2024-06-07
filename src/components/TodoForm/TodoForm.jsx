import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { generateId } from '../../generateId';

const TodoForm = ({ onCreate, clearFields, deleteAllTodos }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) return alert('Пожалуйста, заполните оба поля: Title и Task Body');
        const newTodo = {
            id: generateId(),
            title,
            body,
            completed: false
        };
        onCreate(newTodo);
        clearFields();
    };

    const handleClearFields = () => {
        setTitle('');
        setBody('');
    };

    return (
        <Form className="mb-4" onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBody" className="mb-3">
                <Form.Label>Task body</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Task body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </Form.Group>

            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <Button variant="primary" type="submit" className="mr-2">
                        Create Task!
                    </Button>
                    <Button variant="warning" onClick={handleClearFields} className="mx-2">
                        Очистить
                    </Button>
                </div>
                <Button variant="danger" onClick={deleteAllTodos}>
                    Удалить всё
                </Button>
            </div>
        </Form>
    );
};

TodoForm.propTypes = {
    onCreate: PropTypes.func.isRequired,
    clearFields: PropTypes.func.isRequired,
    deleteAllTodos: PropTypes.func.isRequired
};

export default TodoForm;






