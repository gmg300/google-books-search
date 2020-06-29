import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function NoResults({ books }) {

    const { pathname } = useLocation();

    return (
        <div className={books.length > 0 && "d-none" }>
            <h1>{pathname === "/saved" ? "You don't have any saved books!" : "Start typing to search for books!"}</h1>
            <h3 className={pathname !== "/saved" && "d-none"}><Link className="start-search" to="/search">Start your search.</Link></h3>
        </div>
    );
}

export default NoResults;