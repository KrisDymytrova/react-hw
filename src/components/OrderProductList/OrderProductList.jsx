import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import OrderProductListItem from '../OrderProductListItem';

const OrderProductList = ({ products, addProduct, removeProduct, handleDeleteDialogOpen }) => (
    <List>
        {products.map((product) => (
            <OrderProductListItem
                key={product.id}
                product={product}
                addProduct={addProduct}
                removeProduct={removeProduct}
                handleDeleteDialogOpen={handleDeleteDialogOpen}
            />
        ))}
    </List>
);

OrderProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    handleDeleteDialogOpen: PropTypes.func.isRequired,
};

export default OrderProductList;
