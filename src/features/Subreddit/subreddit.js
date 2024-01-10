import React, { useEffect } from "react";
import { chooseSubredditPosts, chooseAboutFillSubreddit, aboutFillSubreddit, fillSubreddit } from "./subredditSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';
import { SubredditPost } from "../Posts/subredditPosts";
import { useSelector, useDispatch } from "react-redux";
import '../Home/Home.css';
import './subreddit.css';

export function Subreddit() {
    const dispatch = useDispatch();
    const { subreddit } = useParams();
    const subredditPosts = useSelector(chooseSubredditPosts);
    const subredditAbout = useSelector(chooseAboutFillSubreddit);


    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching subreddit data...");
            await dispatch(fillSubreddit(subreddit));
            await dispatch(aboutFillSubreddit(subreddit));
        };

        fetchData();
    }, [dispatch, subreddit]);

    console.log(subredditAbout);



    return (
        <>
            <div className="home-container">
                <Link className='subreddit-link' to={`r/${subreddit}`}>
                    <div className="subreddit-container">
                        <Avatar
                            className="subreddit-logo"
                            src={subredditAbout?.['icon_img']}
                            sx={{
                                height: '150px',
                                width: '150px',
                            }}
                        />
                        <div className="subreddit-header-titles">
                            <h1 className="subreddit-large-header">{subredditAbout?.title}</h1>
                            <h2 className="subreddit-small-header">{subredditAbout?.['display_name_prefixed']}</h2>
                        </div>
                    </div>

                </Link>
            </div>
            <div className="home-container">
                {subredditPosts.map((post) => {
                    console.log(subredditPosts);
                    return (
                        <SubredditPost
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            authorPrefixed={`u/${post.author}`}
                            subredditPrefixed={post['subreddit_name_prefixed']}
                            subreddit={post.subreddit}
                            url={post.url}
                            domain={post.domain}
                            metaMedia={post['media_metadata']}
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
        </>
    )
    //     return (
    //         <>
    //           <div className="home-container">
    //             <Link className="subreddit-link" to={`r/${subreddit}`}>
    //               {subredditAbout ? (
    //                 <div className="subreddit-container">
    //                   <Avatar
    //                     src={subredditAbout["icon_img"]}
    //                     sx={{
    //                       height: "150px",
    //                       width: "150px",
    //                     }}
    //                   />
    //                   <div className="subreddit-header-titles">
    //                     <h1 className="subreddit-large-header">
    //                       {subredditAbout.title}
    //                     </h1>
    //                     <h2 className="subreddit-small-header">
    //                       {subredditAbout["display_name_prefixed"]}
    //                     </h2>
    //                   </div>
    //                 </div>
    //               ) : (
    //                 <div>Loading...</div>
    //               )}
    //             </Link>
    //           </div>
    //           <div className="home-container">
    //             {subredditPosts && subredditPosts.length > 0 ? (
    //               subredditPosts.map((post) => (
    //                 <SubredditPost
    //                   key={post.id}
    //                   id={post.id}
    //                   title={post.title}
    //                   author={post.author}
    //                   authorPrefixed={`u/${post.author}`}
    //                   subredditPrefixed={post["subreddit_name_prefixed"]}
    //                   subreddit={post.subreddit}
    //                   url={post.url}
    //                   domain={post.domain}
    //                   metaMedia={post["media_metadata"]}
    //                   media={post.media}
    //                   comments={post["num_comments"]}
    //                   votes={post.ups}
    //                   posthint={post["post_hint"]}
    //                   link={post.link}
    //                   created={post["created_utc"]}
    //                 />
    //               ))
    //             ) : (
    //               <div>No posts available</div>
    //             )}
    //           </div>
    //         </>
    //       );

}