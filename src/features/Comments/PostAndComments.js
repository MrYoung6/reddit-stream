import React, { useEffect } from "react";
import { Post } from "../Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadComments } from "./postCommentsSlice";
import { Comments } from "./Comments";
import '../Home/Home.css'

export function PostAndComments() {
    const dispatch = useDispatch();
    const { subreddit, id, title } = useParams();
    const link = `r/${subreddit}/comments/${id}/${title}`;
    const post = useSelector(state => state.postComments.comments[0]?.data.children[0].data);
    const commentsData = useSelector(state => state.postComments.comments[1]?.data);
    const comments = commentsData ? commentsData.children.map(comment => comment.data) : [];

    console.log("Comments Data:", commentsData);


    useEffect(() => {
        dispatch(loadComments(link));
    }, [dispatch, link]);

    return (
        post ?
            <div className="home-container">
                <Post
                    key={post.id}
                    title={post.title}
                    author={`u/${post.author}`}
                    authorPrefixed={`u/${post.author}`}
                    subredditPrefixed={post['subreddit_name_prefixed']}
                    subreddit={post.subreddit}
                    url={post.url}
                    media={post.media}
                    comments={post['num_comments']}
                    votes={post.ups}
                    posthint={post['post_hint']}
                    domain={post.domain}
                    permalink={post.permalink}
                    created={post['created_utc']}
                />
                {comments && comments.length > 0 && comments.map((comment) => {
                    if (comment.body && comment.body !== "[removed]") {
                        return (
                            <Comments
                                key={comment.id}
                                body={comment.body}
                                author={comment.author}
                                votes={comment.ups}
                                created={comment['created_utc']}
                                replies={comment.replies?.data}
                            />
                        )
                    }

                })}
            </div> :
            <div>
            </div>
    )

}
