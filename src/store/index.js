import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import productsReducer from './slices/productsSlice';
import { loadState, saveState } from '../utils/localStorage';

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        orders: ordersReducer,
        products: productsReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveState({
        orders: store.getState().orders,
    });
});

export default store;



