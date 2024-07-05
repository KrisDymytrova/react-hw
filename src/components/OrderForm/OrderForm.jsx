import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addOrder, updateOrder } from '../../store/slices/ordersSlice';
import { Typography, Button, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import OrderProductList from '../OrderProductList';
import OrderDialog from '../UI/OrderDialog';
import DeleteDialog from '../UI/DeleteDialog';
import { addProductToOrder, removeProductFromOrder } from '../../utils/productUtils';
import styles from "../OrderForm/OrderForm.module.scss";

const OrderForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const existingOrder = useSelector((state) =>
        state.orders.orders.find((o) => o.id === parseInt(id))
    );

    const [products, setProducts] = useState(existingOrder ? existingOrder.products : []);
    const [isCreatingOrder, setIsCreatingOrder] = useState(false);
    const [open, setOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    useEffect(() => {
        if (existingOrder) {
            setProducts(existingOrder.products);
        }
    }, [existingOrder]);

    const handleSave = () => {
        const newOrder = { id: existingOrder ? existingOrder.id : Date.now(), products };
        if (existingOrder) {
            dispatch(updateOrder(newOrder));
        } else {
            dispatch(addOrder(newOrder));
        }
        navigate('/');
    };

    const handleCreateNewOrder = () => {
        setIsCreatingOrder(true);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteDialogOpen = (product) => {
        setProductToDelete(product);
        setDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
        setProductToDelete(null);
    };

    const confirmDeleteProduct = () => {
        setProducts(products.filter(p => p.id !== productToDelete.id));
        handleDeleteDialogClose();
    };

    const addProduct = (product) => {
        setProducts(addProductToOrder(products, product));
    };

    const removeProduct = (product) => {
        setProducts(removeProductFromOrder(products, product));
    };

    if (!isCreatingOrder && !id) {
        return (
            <Box className={styles.orderFormContainer}>
                <Box className={styles.orderFormHeader}>
                    <Typography variant="h4">Create New Order</Typography>
                    <Button
                        variant="contained"
                        onClick={handleCreateNewOrder}
                        startIcon={<Add />}
                    >
                        Create New Order
                    </Button>
                </Box>
            </Box>
        );
    }

    const showSaveButton = products.length > 0;

    return (
        <Box className={styles.orderFormContainer}>
            <Box className={styles.orderFormHeader}>
                <Typography variant="h4" textAlign="center">{existingOrder ? 'Edit Order' : 'Create New Order'}</Typography>
                <Button
                    variant="contained"
                    sx={{ marginRight: 'auto' }}
                    onClick={handleClickOpen}
                    startIcon={<Add />}
                >
                    Add Products
                </Button>
            </Box>
            <OrderProductList products={products} addProduct={addProduct} removeProduct={removeProduct} handleDeleteDialogOpen={handleDeleteDialogOpen} />
            {showSaveButton && (
                <Button
                    variant="contained"
                    sx={{ width: '150px' }}
                    onClick={handleSave}
                >
                    {existingOrder ? 'Update Order' : 'Save Order'}
                </Button>
            )}
            <OrderDialog open={open} handleClose={handleClose} products={products} setProducts={setProducts} />
            <DeleteDialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogClose}
                onConfirm={confirmDeleteProduct}
            />
        </Box>
    );
};

export default OrderForm;
