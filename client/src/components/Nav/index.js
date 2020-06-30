import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './style.css';


function Nav() {

  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        Google Books Search
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={pathname === "/search" || pathname === "/" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/search">
              Search 
            </Link>
          </li>
          <li className={pathname === "/saved" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
