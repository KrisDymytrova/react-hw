import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import NavMenu from '../../components/NavMenu';
import TodoItemEdit from '../../components/TodoItemEdit';

const TodoItemPage = () => {

    return (
        <BaseTemplate className={'todo-item-page'}>
            <NavMenu />
            <TodoItemEdit />
        </BaseTemplate>
    );
};

export default TodoItemPage;