import { Button, Card, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import { getTodos, setTodos } from "../../LocalStorage/index";

const DATA_KEY = 'data';

const TodoItem = ({ title, body, id, completed, onDelete }) => {
    const [check, setCheck] = useState(completed);

    const handleToggle = () => {
        const todos = getTodos(DATA_KEY);

        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !check };
            }
            return todo;
        });
        setTodos(DATA_KEY, updatedTodos);
        setCheck(!check);
    };

    const handleClick = () => {
        onDelete(id);
    };

    return (
        <Card className="task">
            <Card.Body>
                <Card.Title className="taskHeading">{check ? <s>{title}</s> : title}</Card.Title>
                <Card.Text className="taskDescription">{check ? <s>{body}</s> : body}</Card.Text>
                <hr />
                <Form.Check
                    type="checkbox"
                    label="Завершено ?"
                    checked={check}
                    onChange={handleToggle}
                />
                <hr />
                <Button
                    className={'btn-danger'}
                    onClick={handleClick}
                >
                    Удалить
                </Button>
            </Card.Body>
        </Card>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoItem;

