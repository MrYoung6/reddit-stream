import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../Posts/Posts";
import { selectSearchResults } from "./searchSlice";


export function SearchResults() {

    const searchResults = useSelector(selectSearchResults);

    if (!searchResults) {
        console.log('No Results Found')
    }

    return (
        <div className="home-container">
            {searchResults && searchResults.map((post) => {
                return (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        author={post.author}
                        authorPrefixed={`u/${post.author}`}
                        subredditPrefixed={post["subreddit_name_prefixed"]}
                        subreddit={post.subreddit}
                        url={post.url}
                        domain={post.domain}
                        metaMedia={post["media_metadata"]}
                        media={post.media}
                        comments={post["num_comments"]}
                        votes={post.ups}
                        posthint={post["post_hint"]}
                        link={post.link}
                        created={post["created_utc"]}
                    />
                )
            })}
        </div>
    )
}


