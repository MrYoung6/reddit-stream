import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fillSubreddit = createAsyncThunk(
  'subreddit/fillSubreddit',
  async (subreddit, thunkAPI) => {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const json = await response.json();

      if (json.data && json.data.children) {
        return json.data.children.map(element => element.data);
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching subreddit data:', error);
      throw error;
    }
  }
);



export const aboutFillSubreddit = createAsyncThunk(
  'subreddit/aboutFillSubreddit',
  async (subreddit, thunkAPI) => {
    const response = await fetch(`https://www.reddit.com/api/info.json?sr_name=${subreddit}`);
    const json = await response.json();

    return json.data.children[0].data;
  }
);


export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    posts: [],
    aboutFillSubreddit: [],
    isLoading: false,
    failedToLoad: false
  },
  reducers: {},
  extraReducers: {

    [fillSubreddit.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [fillSubreddit.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    },
    [fillSubreddit.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.posts = action.payload;
      state.isLoading = false;
      state.failedToLoad = false;
    },

    [aboutFillSubreddit.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [aboutFillSubreddit.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.isLoading = false;
      state.failedToLoad = false;
      state.aboutFillSubreddit = action.payload;
    },
    [aboutFillSubreddit.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    },
  }
})

export const chooseSubredditPosts = state => state.subreddit.posts;
export const chooseAboutFillSubreddit = state => state.subreddit.aboutFillSubreddit;

export default subredditSlice.reducer;
