import { configureStore } from "@reduxjs/toolkit";
import usersInfoSliceReducer from "../features/Userinfo/userInfoSlice";
import subredditSliceReducer from "../features/Subreddit/subredditSlice";
import postCommentsSliceReducer from "../features/Comments/postCommentsSlice";
import searchSliceReducer from "../features/Header/searchSlice";
import homeSliceReducer from "../features/Home/homeSlice";
import communitiesSliceReducer from "../features/Communities/communitiesSlice";
import thunk from "redux-thunk";


export const store = configureStore({
    reducer: {
        usersInfo: usersInfoSliceReducer,
        subreddit: subredditSliceReducer,
        postComments: postCommentsSliceReducer,
        search: searchSliceReducer,
        home: homeSliceReducer,
        communities: communitiesSliceReducer
    },

    middleware: [thunk],
});