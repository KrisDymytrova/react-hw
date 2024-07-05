import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        updateOrder: (state, action) => {
            const index = state.orders.findIndex(order => order.id === action.payload.id);
            if (index !== -1) {
                state.orders[index] = action.payload;
            }
        },
        deleteOrder: (state, action) => {
            state.orders = state.orders.filter(order => order.id !== action.payload.id);
        },
    },
});

export const { addOrder, updateOrder, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
