import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
    "search",
    async (searchQuery, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
            const result = await response.json();
            console.log("Search products:", result);
            const search = result.map(product => product.category);
            dispatch(search);
            return search;
        } catch (error) {
            return rejectWithValue("Oops, something went wrong");
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: "",
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
