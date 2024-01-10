import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk(
    'userInfo/fetchUser',
    async (username) => {
        const response = await fetch(`https://www.reddit.com/user/${username}/about.json`);
        const json = await response.json();
        return json.data;
    }
);

export const usersInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        user: [],
        isLoading: false,
        failedToLoad: false
    },
    reducers: {},
    extraReducers: {

        [fetchUser.pending]: (state) => {
            state.isLoading = true;
            state.failedToLoad = false;
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.failedToLoad = false;
            state.user = action.payload;
        },
        [fetchUser.rejected]: (state) => {
            state.isLoading = false;
            state.failedToLoad = true;
        },
    }
});

export const chooseUser = (state) => state.userInfo?.user;

export default usersInfoSlice.reducer;
