import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Add } from "@mui/icons-material";
import { addProductToOrder } from '../../utils/productUtils';
import { setProducts as setProductsAction } from '../../store/slices/productsSlice';

const ProductList = ({ products, setProducts }) => {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => dispatch(setProductsAction(data)));
    }, [dispatch]);

    const addProduct = (product) => {
        setProducts(addProductToOrder(products, product));
    };

    return (
        <>
            <List>
                {allProducts.map((product) => (
                    <ListItem key={product.id} divider>
                        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                            <Grid item xs={1}>
                                <ListItemAvatar>
                                    <Avatar src={product.image} sx={{ width: 60, height: 60, borderRadius: '10%' }} alt={product.title} />
                                </ListItemAvatar>
                            </Grid>
                            <Grid item xs={3}>
                                <ListItemText
                                    primary={product.title}
                                    secondary={product.category}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Typography>
                                    {product.price} $
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    variant="contained"
                                    onClick={() => addProduct(product)}
                                    startIcon={<Add />}
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
};

export default ProductList;
