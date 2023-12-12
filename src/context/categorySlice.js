import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk("categories", async (_, { rejectWithValue, dispatch, getState }) => {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    const result = await response.json();
    console.log("Fetched categories:", result);

    // Get all products from the state
    const allProducts = getState().products.allProducts;

    // Filter out categories without products
    const categoriesWithProducts = result.filter(category =>
      allProducts.some(product => product.category === category)
    );

    // Dispatch setCategories action with filtered categories
    dispatch(setCategories(categoriesWithProducts));

    return categoriesWithProducts;
  } catch (error) {
    return rejectWithValue("Oops, something went wrong");
  }
});


const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
    categories: [],
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategory, setCategories } = categorySlice.actions;
export default categorySlice.reducer;
