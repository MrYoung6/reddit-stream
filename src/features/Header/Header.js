import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import RedditIcon from '@mui/icons-material/Reddit';

import './Header.css';


export function Header() {
    return (
        <div className='header-holder'>
            <Link to="/" className="link-header">
            <RedditIcon className='icon-reddit' fontSize="large"/>
            <h1 className="header-name">Reddit<span>Stream</span></h1>
            </Link>
            <Search />
        </div>
    )
}