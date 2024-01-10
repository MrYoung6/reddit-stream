import React, {useEffect } from "react";
import { loadNew, selectNewPosts } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../Posts/Posts";
import './Home.css';

export function New() {
    const dispatch = useDispatch();
    const newPosts = useSelector(selectNewPosts);

    useEffect(() => {
        dispatch(loadNew());
    }, [dispatch])

    return(
        <div className="home-container">
            {newPosts?.map((post)=> {
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