import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import NavMenu from '../../components/NavMenu';
import OrderForm from '../../components/OrderForm';

const OrderFormPage = () => {

    return (
        <BaseTemplate className={'order-form-page'}>
            <NavMenu />
            <OrderForm />
        </BaseTemplate>
    );
};

export default OrderFormPage;