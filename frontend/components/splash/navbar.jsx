import React from 'react'
import {Link} from 'react-router-dom'


const Navbar =()=>(
    <div className="nav">
        <div className="logo">
            <span><a href="#">PEXCEL</a></span>
        </div>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </ul>
    </div>
);


export default Navbar;
