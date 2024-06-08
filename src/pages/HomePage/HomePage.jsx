import React, { useState } from 'react';

import NavMenu from "../../components/NavMenu";
import TodoList from '../../components/TodoList';

const HomePage = () => {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <NavMenu />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );
};

export default HomePage;











