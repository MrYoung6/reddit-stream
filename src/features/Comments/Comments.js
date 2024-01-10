import React from "react";
import { UserInfo } from '../Userinfo/UserInfo';
import { Votes } from "../Votes/Votes";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Typography } from "@mui/material";
import { time } from "../Helpers/helpers";

export function Comments(props) {
    const { author, replies, votes, created, body } = props;

    console.log("Replies:", replies);

    return (
        <Card
            sx={{
                marginTop: '10px',
                maxWidth: '690px',
                backgroundColor: 'rgb(36, 36, 36)',
                borderRadius: '15px',
            }}
        >
            <CardHeader
                avatar={
                    <UserInfo username={author} />
                }
                subheader={`Posted by u/${author} ${time(created)}`}
                subheaderTypographyProps={{
                    fontSize: '0.9rem',
                    color: 'rgb(160, 160, 160)',
                }}
            />
            <CardContent>
                <Typography
                    sx={{
                        fontSize: '1rem',
                        color: 'rgb(216, 216, 216)',
                    }}
                >
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Votes votes={votes} />
            </CardActions>
            {replies && replies.data && replies.data.children && replies.data.children.length > 0 && (
                replies.data.children.map((reply) => {
                    return (
                        <Comments
                            key={reply.data.id}
                            author={reply.data.author}
                            created={reply.data['created_utc']}
                            body={reply.data.body}
                            votes={reply.data.ups}
                            replies={reply.data.replies}
                        />

                    )
                }))
            }
        </Card>
    )
}