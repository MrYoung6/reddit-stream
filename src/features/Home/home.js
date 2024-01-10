import React, { useEffect } from "react";
import { Post } from "../Posts/Posts";
import { Best } from "./best";
import { Top } from "./top";
import { New } from "./new";
import { Hot } from "./hot";
import { selectHomePosts, loadHome } from './homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import './Home.css'


export function Home() {
    const dispatch = useDispatch();
    const homePosts = useSelector(selectHomePosts);

    useEffect(() => {
        dispatch(loadHome())
    }, [])

    return (
        <div className="home-container">
            <div>
                <Routes>
                    <Route path='/best' element={<Best />} />
                    <Route path='/hot' element={<Hot />} />
                    <Route path='/new' element={<New />} />
                    <Route path='/top' element={<Top />} />
                </Routes>
            </div>
            <div className="home-container">
                {homePosts?.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            authorPrefixed={`u/${post.author}`}
                            subredditPrefixed={post['subreddit_name_prefixed']}
                            subreddit={post.subreddit}
                            url={post.url}
                            media={post.media}
                            comments={post['num_comments']}
                            votes={post.ups}
                            posthint={post['post_hint']}
                            permalink={post.permalink}
                            created={post['created_utc']}
                        />
                    )
                })}
            </div>
        </div>
    )
}