import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Typography } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const OrderProductListItem = ({ product, addProduct, removeProduct, handleDeleteDialogOpen }) => {
    const totalPrice = (product.quantity * product.price).toFixed(2);

    return (
        <ListItem key={product.id} divider>
            <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                <Grid container item xs={1} justifyContent="center">
                    <ListItemAvatar>
                        <Avatar src={product.image} sx={{ width: 60, height: 60, borderRadius: '10%' }} alt={product.title} />
                    </ListItemAvatar>
                </Grid>
                <Grid item xs={3} justifyContent="center">
                    <ListItemText primary={product.title} secondary={product.category} />
                </Grid>
                <Grid item xs={3} container alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item>
                        <IconButton onClick={() => removeProduct(product)} disabled={product.quantity === 1}>
                            <Remove />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography>{product.quantity}</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => addProduct(product)}>
                            <Add />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{totalPrice} $</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={() => handleDeleteDialogOpen(product)}>
                        <Delete />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    );
};

OrderProductListItem.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    handleDeleteDialogOpen: PropTypes.func.isRequired,
};

export default OrderProductListItem;
