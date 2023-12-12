import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk('user/loginUser', async (userCredentials) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    localStorage.setItem('user', JSON.stringify(data));

    return data;
});


const authSlice = createSlice({
    name: 'user',
    initialState: {
        user: "",
        loading: false,
        error: "",
    },
    extraReducers: (builder) => {
        builder

            .addCase(loginUser.pending, (state) => {
                state.loading = false;
                state.user = null;
                state.error = null;
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                const error = action.error.message;
                state.loading = false;
                state.user = null;
                console.log(error.action.message);
                if (error.action.message === 'Request failed with status code 401') {
                    state.error = 'Acces denies ! invalid credentials'
                }
                else {
                    state.error = action.error.message;

                }
            })
    }
})
// export const { addtoken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;