import React, { useState } from 'react';

import TodoList from '../../components/TodoList';

const HomePage = () => {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );
};

export default HomePage;











