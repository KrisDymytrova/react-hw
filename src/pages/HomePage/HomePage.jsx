import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import NavMenu from '../../components/NavMenu';
import OrderList from '../../components/OrderList';

const HomePage = () => {

    return (
        <BaseTemplate className={'home-page'}>
            <NavMenu />
            <OrderList />
        </BaseTemplate>
    );
};

export default HomePage;