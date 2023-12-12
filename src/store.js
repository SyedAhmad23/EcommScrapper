import { configureStore } from '@reduxjs/toolkit';
import authSlice from './context/authSlice';
import productSlice from './context/productSlice';
import categorySlice from "./context/categorySlice";
const store = configureStore({
    reducer: {
        user: authSlice,
        products: productSlice,
        category: categorySlice,
    },
});

export default store;
