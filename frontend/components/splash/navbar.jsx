import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let display;
        if (this.props.CurrentUser){
            debugger;
            display = (
                <ul className="navbar">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/discover">Demo</Link></li>
                </ul>
            )
        }else{
            display = (
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            )
        }


        return (
            <div className="nav">
                <div className="logo">
                    <span><a href="#">PEXCEL</a></span>
                </div>
                {display}
            </div>
        )
    }

}




export default Navbar;
