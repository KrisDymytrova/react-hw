import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../../LocalStorage";

const NavMenu = () => {
    const DATA_KEY = 'data';
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchNotes = () => {
            setTodos(getTodos(DATA_KEY));
        }
        const intervalId = setInterval(() => {
            fetchNotes();
        }, 500)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Home Page</Link>
            {todos.map((todo) => (
                <Link
                    key={todo.id}
                    to={`/todo-items/${todo.id}`}
                    className="nav-link"
                >
                    Task: {todo.title}
                </Link>
            ))}
        </nav>
    );
};

export default NavMenu;

