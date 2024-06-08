import React from 'react';
import { useParams } from 'react-router-dom';
import { getTodos } from "../../LocalStorage";
import { Container, Card } from 'react-bootstrap';

const ItemPage = () => {
    const { id } = useParams();
    const DATA_KEY = 'data';
    const todos = getTodos(DATA_KEY);
    const todo = todos.find(todo => todo.id === Number(id));

    if (!todo) {
        return <h1>Задача не найдена</h1>;
    }

    return (
        <Container className="mt-5">
            <h1 className="pb-5">TodoItem Page</h1>
            <Card>
                <Card.Body>
                    <Card.Title><b>Название задачи:</b> {todo.title}</Card.Title>
                    <Card.Text><b>Описание задачи:</b> {todo.body}</Card.Text>
                    <Card.Text style={{color: todo.completed ? 'green' : 'red'}}>
                        <b>Состояние:</b> {todo.completed ? 'Завершено' : 'Не завершено'}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ItemPage;
