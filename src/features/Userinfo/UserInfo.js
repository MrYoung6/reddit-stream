import React from "react";
import Avatar from '@mui/material/Avatar';


export function UserInfo ({username}) {
    return (
        <Avatar
        src={`${username}`} 
        alt={`${username}`} 
        />
    );
};