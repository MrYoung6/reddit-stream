import React from "react";
import { UserInfo } from "../Userinfo/UserInfo";
import { Link } from "react-router-dom";
import { Votes } from "../Votes/Votes";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, Typography } from "@mui/material";
import { addK, time } from "../Helpers/helpers";
import "./Posts.css"

export function SubredditPost(props) {
    let mediaChange;

    if (props.posthint === 'link') {
        mediaChange = <a href={props.url} >{props.url.slice(0,30) + '...'}</a>
    } else if (props.url.match('https://www.reddit.com/r/')) {
        mediaChange = <div></div>
    } else {
        mediaChange =
        <CardMedia
        component={props.media ? 'video' :  'img'}
        src={props.media && props.media['reddit_video'] && props.media['reddit_video']['fallback_url'] ? props.media['reddit_video']['fallback_url'] : props.url}
        controls
        />
    }
    return (
        <Card
        key={props.author}
        className='card-post'
        sx={{
            marginTop: '10px',
            maxWidth: '690px',
            backgroundColor: 'rgb(36, 36, 36)',
            borderRadius: '15px',
        }}>
            <CardHeader 
            avatar={
                <UserInfo username={props.author}/>
            }
            subheader={`Posted by ${props.authorPrefixed} ${time(props.created)}`}
            subheaderTypographyProps={{
                display: 'inline-block',
                fontSize: '0.9rem',
                color: 'rgb(160, 160, 160)',
            }}
            />
            <CardContent>               
                 <Typography
                sx={{
                    fontSize:'1rem',
                    color: 'rgb(216, 216, 216)',
                }}>{props.title}</Typography>
            </CardContent>
            {mediaChange}
            <CardActions>
            <Votes votes={props.votes}/>
                <Link
                to={`${props.permalink}`}
                className='link-post'
                >
                    <Button
                    variant='text'
                    className='post-button'
                    sx={{
                        color:'rgb(213, 213, 213)',
                        fontSize: '1rem',
                        textTransform:'none',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'rgb(126, 125, 125)',
                        }
                    }}
                    >
                        <ChatBubbleIcon 
                        fontSize='medium'
                        sx={{
                            margin: '5px',
                            marginRight: '10px',
                            color: 'rgb(213, 213, 213)',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'rgb(126, 125, 125)',
                            }
                         }} 
                        />
                        {addK(props.comments)} Comments
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
    
}