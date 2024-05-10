
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/counter/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;
