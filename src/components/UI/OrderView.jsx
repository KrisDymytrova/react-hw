import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableRow, Box, Avatar, ListItemText} from '@mui/material';

const OrderView = ({ order }) => {
    return (
        <TableRow>
            <TableCell colSpan={3}>
                <Box p={2} bgcolor="background.paper">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Product Image</TableCell>
                                <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Title/Category</TableCell>
                                <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Quantity</TableCell>
                                <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>Total Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Avatar src={product.image} sx={{ width: 60, height: 60, borderRadius: '10%' }} alt={product.title} />
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <ListItemText
                                            primary={product.title}
                                            secondary={product.category}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{product.quantity}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{(product.price * product.quantity).toFixed(2)} $</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </TableCell>
        </TableRow>
    );
};

OrderView.propTypes = {
    order: PropTypes.shape({
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                image: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                category: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default OrderView;
