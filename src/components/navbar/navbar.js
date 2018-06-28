import React from 'react'
import { Link } from 'react-router-dom'
// import './Navbar.css'


const Navbar = props => (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">ClickGame</Link>
        <div>
             <ul className="navbar">
                  <li className={
                  window.location.pathname === "/" || 
                  window.location.pathname === "/about"
                  ? "nav-item active"
                  : "nav-item"
                 }>

                    <Link to="/root" className="nav-link"
                    >About
                    </Link>
                    
                </li>
                 <li className={
                      window.location.pathname === "/rules" 
                      ? "nav-item active"
                      : "nav-item"
                 }>

                    <Link to="/root" className="nav-link">
                    Rules
                    </Link>
                 
                 </li>
                 <li className={
                      window.location.pathname === "/learn" 
                      ? "nav-item active"
                      : "nav-item"
                 }>

                    <Link to="/root" className="nav-link">
                    Learn
                    </Link>
                 
                 
                  </li>
             </ul>
        </div>
    </nav>
)

export default Navbar