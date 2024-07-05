import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ProductList from '../ProductList';

const OrderDialog = ({ open, handleClose, products, setProducts }) => (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Product List</DialogTitle>
        <DialogContent>
            <ProductList products={products} setProducts={setProducts} />
        </DialogContent>
        <DialogActions>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
            >
                Close
            </Button>
        </DialogActions>
    </Dialog>
);

OrderDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
};

export default OrderDialog;
