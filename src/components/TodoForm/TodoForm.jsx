import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const TodoForm = ({ onCreate, deleteAllTodos }) => {
    const [formData, setFormData] = useState({ title: '', body: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.body) {
            return alert('Пожалуйста, заполните оба поля: Title и Task Body');
        }
        const newTodo = {
            ...formData,
            completed: false
        };
        onCreate(newTodo);
        handleClear();
    };

    const handleClear = () => {
        setFormData({ title: '', body: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <Form className="mb-4" onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formBody" className="mb-3">
                <Form.Label>Task body</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Task body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />
            </Form.Group>

            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <Button variant="primary" type="submit" className="mr-2">
                        Create Task!
                    </Button>
                    <Button variant="warning" onClick={handleClear} className="mx-2">
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
    deleteAllTodos: PropTypes.func.isRequired
};

export default TodoForm;








