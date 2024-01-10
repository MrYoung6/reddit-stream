import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fillCommunities = createAsyncThunk(
    'communities/fillCommunities',
    async(thunkAPI) => {
        const response = await fetch('https://www.reddit.com/subreddits/popular.json');
        const json = await response.json();
        return json.data.children.map(post => post.data);
    }
)

export const communitiesSlice = createSlice({
    name: 'communities',
    initialState: {
        communitiesArray: [],
        isLoading: false,
        failedToLoad: false,
    },
    reducers: {},
    extraReducers: {
        [fillCommunities.pending]: (state) => {
            state.isLoading = true;
            state.failedToLoad = false;
        },
        [fillCommunities.fulfilled]: (state, action) => {
            state.communitiesArray = action.payload;
            state.isLoading = false;
            state.failedToLoad = false;
        },
        [fillCommunities.rejected]: (state) => {
            state.isLoading = false;
            state.failedToLoad = true;
        },
    }
})

export const chooseCommunities = state => state.communities.communitiesArray;

export default communitiesSlice.reducer;