import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../../store/slices/ordersSlice';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
    Box,
} from '@mui/material';
import {Add, Edit, Delete, Visibility, VisibilityOff} from '@mui/icons-material';
import OrderView from '../UI/OrderView';
import DeleteDialog from '../UI/DeleteDialog';
import styles from './OrderList.module.scss';

const OrderList = () => {
    const orders = useSelector((state) => state.orders.orders);
    const dispatch = useDispatch();
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);

    const sortedOrders = useMemo(() => {
        return orders.slice().sort((a, b) => b.id - a.id);
    }, [orders]);

    const handleDelete = (id) => {
        const orderToDelete = orders.find(order => order.id === id);
        setOrderToDelete(orderToDelete);
        setDeleteDialogOpen(true);
    };

    const handleView = (id) => {
        setExpandedOrderId(expandedOrderId === id ? null : id);
    };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
        setOrderToDelete(null);
    };

    const handleConfirmDelete = () => {
        if (orderToDelete) {
            dispatch(deleteOrder({ id: orderToDelete.id }));
            setOrderToDelete(null);
        }
        setDeleteDialogOpen(false);
    };

    return (
        <Box className={styles.orderListContainer}>
            <Box className={styles.orderListHeader}>
                <Typography variant="h4">Order List</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/orders/edit/new"
                    startIcon={<Add />}
                >
                    Add New Order
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>ID</TableCell>
                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Date Modified</TableCell>
                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedOrders.map((order) => (
                            <React.Fragment key={order.id}>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>{order.id}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{new Date(order.id).toLocaleDateString()}</TableCell>
                                    <TableCell sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '20px'
                                    }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleView(order.id)}
                                            startIcon={expandedOrderId === order.id ? <VisibilityOff /> : <Visibility />}
                                        >
                                            {expandedOrderId === order.id ? 'Hide' : 'View'}
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="info"
                                            component={Link}
                                            to={`/orders/edit/${order.id}`}
                                            startIcon={<Edit />}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(order.id)}
                                            startIcon={<Delete />}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                {expandedOrderId === order.id && (
                                    <OrderView order={order} />
                                )}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteDialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogClose}
                onConfirm={handleConfirmDelete}
                order={orderToDelete}
            />
        </Box>
    );
};

export default OrderList;
