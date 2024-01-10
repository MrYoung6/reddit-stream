import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadHome = createAsyncThunk(
    'home/loadHome',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://www.reddit.com/.json');
            const json = await response.json();

            if (json && json.kind === 'Listing' && json.data && json.data.children) {
                return json.data.children.map(post => post.data);
            } else {
                console.error('Unexpected API response structure:', json);
                throw new Error('Unexpected API response structure');
            }
        } catch (error) {
            console.error('Failed to load new posts:', error);
            throw new Error('Failed to load new posts');
        }
    }
);
  
export const loadBest = createAsyncThunk(
    'home/loadBest',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://www.reddit.com/best.json');
            const json = await response.json();


            if (json && json.kind === 'Listing' && json.data && json.data.children) {
                return json.data.children.map(post => post.data);
            } else {
                console.error('Unexpected API response structure:', json);
                throw new Error('Unexpected API response structure');
            }
        } catch (error) {
            console.error('Failed to load new posts:', error);
            throw new Error('Failed to load new posts');
        }
    }
);
export const loadTop = createAsyncThunk(
    'home/loadTop',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://www.reddit.com/top.json');
            const json = await response.json();

            if (json && json.kind === 'Listing' && json.data && json.data.children) {
                return json.data.children.map(post => post.data);
            } else {
                console.error('Unexpected API response structure:', json);
                throw new Error('Unexpected API response structure');
            }
        } catch (error) {
            console.error('Failed to load new posts:', error);
            throw new Error('Failed to load new posts');
        }
    }
);

export const loadNew = createAsyncThunk(
    'home/loadNew',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://www.reddit.com/new.json');
            const json = await response.json();

            if (json && json.kind === 'Listing' && json.data && json.data.children) {
                return json.data.children.map(post => post.data);
            } else {
                console.error('Unexpected API response structure:', json);
                throw new Error('Unexpected API response structure');
            }
        } catch (error) {
            console.error('Failed to load new posts:', error);
            throw new Error('Failed to load new posts');
        }
    }
);

  
export const loadHot = createAsyncThunk(
    'home/loadHot',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://www.reddit.com/hot.json');
            const json = await response.json();

            if (json && json.kind === 'Listing' && json.data && json.data.children) {
                return json.data.children.map(post => post.data);
            } else {
                console.error('Unexpected API response structure:', json);
                throw new Error('Unexpected API response structure');
            }
        } catch (error) {
            console.error('Failed to load new posts:', error);
            throw new Error('Failed to load new posts');
        }
    }
);


export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        homePosts: [],
        bestPosts: [],
        topPosts: [],
        hotPosts: [],
        newPosts: [],
        isLoading: false,
        failedToLoad: false
    },
    reducers: {},
    extraReducers: {
        [loadBest.pending]: (state, action) => {
            state.isLoading = true;
            state.failedToLoad = false;
        },
        [loadBest.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.failedToLoad = false;
            state.bestPosts = action.payload;
        },
       [loadBest.rejected]: (state, action) => {
        state.isLoading = false;
        state.failedToLoad = true;
       },
       [loadHot.pending]: (state, action) => {
        state.isLoading = true;
        state.failedToLoad = false;
       },
       [loadHot.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.failedToLoad = false;
        state.hotPosts = action.payload;
       },
       [loadHot.rejected]: (state, action) => {
        state.isLoading = false;
        state.failedToLoad = true;
       },
       [loadTop.pending]: (state, action) => {
        state.isLoading = true;
        state.failedToLoad = false;
       },
       [loadTop.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.failedToLoad = false;
        state.topPosts = action.payload;
       },
       [loadTop.rejected]: (state, action) => {
        state.isLoading = false;
        state.failedToLoad = true;
       },
       [loadNew.pending]: (state, action) => {
        state.isLoading = true;
        state.failedToLoad = false;
       },
       [loadNew.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.failedToLoad = false;
        state.newPosts = action.payload;
       },
       [loadNew.rejected]: (state, action) => {
        state.isLoading = true;
        state.failedToLoad = false;
       },
       [loadHome.pending]:  (state, action) => {
        state.isLoading = true;
        state.failedToLoad = false;
       },
       [loadHome.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.failedToLoad = false;
        state.homePosts = action.payload;
       },
       [loadHome.rejected]: (state, action) => {
        state.isLoading = false;
        state.failedToLoad = true;
       },

    }
})


export const selectHomePosts = state => state.home.homePosts;
export const selectBestPosts = state => state.home.bestPosts;
export const selectHotPosts = state => state.home.hotPosts;
export const selectNewPosts = state => state.home.newPosts;
export const selectTopPosts = state => state.home.topPosts;

export default homeSlice.reducer;
