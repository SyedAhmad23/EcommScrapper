import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk("products", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        console.log("Fetched Products:", result);
        return result;
    } catch (error) {
        return rejectWithValue("Oops, something went wrong");
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        loading: false,
        error: null,
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.cart.findIndex(item => item.id === newItem.id);

            if (existingItemIndex !== -1) {
                state.cart[existingItemIndex].quantity += 1;
            } else {
                state.cart.push({ ...newItem, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        removeAllFromCart: (state) => {
            state.cart = [];
        },

        decreaseQuantity: (state, action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;

            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.allProducts = action.payload.products;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
export const {
    addToCart,
    removeFromCart,
    removeAllFromCart,
    decreaseQuantity,
} = productsSlice.actions;
