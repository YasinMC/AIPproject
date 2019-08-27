import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>                
                <Link to="/leaderboard">leaderboard</Link>
            </li>
            <li>
                <Link to="/browse">browse</Link>
            </li>
            <li>
                <Link to="/login">login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;