import React, {useEffect } from "react";
import { loadBest, selectBestPosts } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../Posts/Posts";
import './Home.css';

export function Best() {
    const dispatch = useDispatch();
    const bestPosts = useSelector(selectBestPosts);

    useEffect(() => {
        dispatch(loadBest());
    }, [dispatch])

    return(
        <div className="home-container">
            {bestPosts?.map((post)=> {
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
                link={post.link}
                created={post['created_utc']}
                />
                )})}
        </div>
    )
}