import React from 'react';
import { useParams } from 'react-router-dom';

import TodoItem from '../../components/TodoItem';

const ItemPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Todo Item Page</h1>
            <TodoItem id={id} />
        </div>
    );
};

export default ItemPage;


