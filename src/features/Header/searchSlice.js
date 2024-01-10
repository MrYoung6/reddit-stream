import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSearchResults = createAsyncThunk(
  'search/loadSearchResults',
  async (searchQuery, thunkAPI) => {
    try {
      const response = await fetch(`https://www.reddit.com/search.json?q=${searchQuery}`);
      const json = await response.json();

      if (json && json.data && json.data.children) {
        return json.data.children.map(result => result.data);
      } else {
        console.error('Unexpected API response structure:', json);
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      console.error('Failed to load search results:', error);
      throw new Error('Failed to load search results');
    }
  }
);



export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    isLoading: false,
    failedToLoad: false,

  },
  reducers: {},
  extraReducers: {
    [loadSearchResults.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [loadSearchResults.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = false;
      state.searchResults = action.payload;
    },
    [loadSearchResults.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    }
  }

})

export const selectSearchResults = (state) => state.search?.searchResults;

export default searchSlice.reducer;
