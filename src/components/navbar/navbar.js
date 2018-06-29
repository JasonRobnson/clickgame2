import React from 'react'
import { Link } from 'react-router-dom'
// import './Navbar.css'


const Navbar = props => (
    <nav className="navbar teal lighten-2 ">
     <ul>
    <li>
    <Link className="navbar-brand" to="/">
      The Click Game
    </Link>
        </li>
     
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            About
          </Link>

        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
      </ul>

  </nav>
)

export default Navbar