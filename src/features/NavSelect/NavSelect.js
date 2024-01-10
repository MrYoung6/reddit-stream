import React from "react";
import RocketIcon from '@mui/icons-material/Rocket';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { NavLink } from "react-router-dom";
import "./navSelect.css"

export function NavSelect() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/top' className='navbar-link'>
                        <LeaderboardIcon className="nav-icon" fontSize="Large" />
                        <span>Top</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/hot' className='navbar-link'>
                        <WhatshotIcon className="nav-icon" fontSize="Large" />
                        <span>Hot</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' className='navbar-link'>
                        <NewReleasesIcon className="nav-icon" fontSize="Large" />
                        <span>New</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/best' className='navbar-link'>
                        <RocketIcon className="nav-icon" fontSize='Large' />
                        <span>Best</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}