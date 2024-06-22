import React from 'react';
import useAuth from '../../hooks/useAuth';
import BaseTemplate from '../../templates/BaseTemplate';
import NavMenu from '../../components/NavMenu';
import TodoList from '../../components/TodoList';

const HomePage = () => {
    useAuth();

    return (
        <BaseTemplate className={'home-page'}>
            <NavMenu />
            <TodoList />
        </BaseTemplate>
    );
};

export default HomePage;