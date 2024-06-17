import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import NavMenu from '../../components/NavMenu';
import TodoList from '../../components/TodoList';

const HomePage = () => {

    return (
        <BaseTemplate className={'home-page'}>
            <NavMenu />
            <TodoList />
        </BaseTemplate>
    );
};

export default HomePage;