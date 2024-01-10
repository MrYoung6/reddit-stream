import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadComments = createAsyncThunk(
    'postComments/loadComments',
    async (permalink, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com/${permalink}/.json`);
        const json = await response.json();

        return json;
    }
)


export const postCommentsSlice = createSlice({
    name: 'postComments',
    initialState: {
        comments: [],
        isLoading: false,
        failedToLoad: false
    },
    reducers: {},
    extraReducers: {
        [loadComments.pending]: (state, action) => {
            state.isLoading = true;
            state.failedToLoad = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.failedToLoad = false;
            state.comments = action.payload;
        },
        [loadComments.rejected]: (state, action) => {
            console.error("Error loading comments:", action.error.message);
            state.isLoading = false;
            state.failedToLoad = true;
        },
    }
})

export const choosePost = state => state.postComments?.comments;

export default postCommentsSlice.reducer;

