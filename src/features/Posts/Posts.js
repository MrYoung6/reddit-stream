import React from "react";
import { Link } from "react-router-dom";
import { time, addK } from "../Helpers/helpers";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Button, Typography } from "@mui/material";
import { Votes } from "../Votes/Votes";
import './Posts.css'

export function Post(props) {
    let mediaChange;

    if (props.posthint === 'link') {
        mediaChange = <a className='url-post' href={props.url} >{props.url?.slice(0, 30) + '...'}</a>
    } else if (props.url && props.url.match('https://www.reddit.com/r/')) {
        mediaChange = <div></div>
    } else {
        console.log('Unexpected URL format:', props.url);
        mediaChange =
            <CardMedia
                className="media-post"
                component={props.media ? 'video' : 'img'}
                controls
                src={props.media && props.media['reddit_video'] && props.media['reddit_video']['fallback_url'] ? props.media['reddit_video']['fallback_url'] : props.url}
            />
    }
    console.log("Link:", props.link);
    console.log(props.permalink)

    return (
        <Card
            key={props.author}
            className="card-post"
            sx={{
                marginTop: '10px',
                maxWidth: '690px',
                backgroundColor: 'rgb(36, 36, 36)',
            }}
        >
            <CardHeader
                className="header-post"
                sx={{
                    display: 'inline-block',
                    width: '100%',
                    color: 'rgb(216, 216, 216)',
                }}
                title={<Link to={`/r/${props.subreddit}`} className="link-post" >{props.subredditPrefixed}</Link>}
                subheader={`Posted by ${props.authorPrefixed} ${time(props.created)}`}
                subheaderTypographyProps={{
                    display: 'inline-block',
                    fontSize: '1rem',
                    color: 'rgb(160, 160, 160)',
                }}
            >
            </CardHeader>
            <CardContent className="content-post">
                <Typography className='post-title'
                    sx={{
                        fontSize: '1.2rem',
                        color: 'rgb(216, 216, 216)',
                    }}>{props.title}</Typography>
            </CardContent>
            {mediaChange}
            <CardActions >
                <Votes votes={props.votes} />
                <Link
                    to={`/r/${props.subreddit}/comments/${props.id}/${props.title}`}
                    className="link-post"
                >
                    <Button
                        variant='text'
                        sx={{
                            color: 'white'
                        }}
                    >
                        <ChatBubbleIcon
                            fontSize="medium"
                            sx={{
                                marginRight: '10px'
                            }}
                        />
                        {addK(props.comments)} Comments
                    </Button>
                </Link>
            </CardActions>
        </Card>

    )
}

