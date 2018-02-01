import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={username: "",
        password: ""};
        this.logout= this.logout.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    logout(){
        return this.props.logoutuser()
           // .then(() => this.props.history.push('/login'))
    }


    loginDemo(e){
        e.preventDefault();
        return this.props.loginuser({username: "Demo",password:12345678})
    }



    render(){
        let display;
        if (this.props.currentUser){
            display =(

                    <ul className="user-info">
                        <li><h3>Welcome {this.props.currentUser.username}</h3></li>
                        <li><Link onClick={this.logout} to='/login'>Logout</Link></li>
                    </ul>

                    )
        }else{
            display =(

                    <ul className="nav-login">
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                        <li><Link onClick={this.loginDemo} to="/profile">Demo</Link></li>
                    </ul>
                )
        }
        return (
            <div className="navbar">
                <div className="links">
                    <h1><Link to='/'>PEXCEL</Link></h1>
                    <ul>
                        <li><Link to="/">Discover</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>
                </div>
                {display}
            </div>
        )
    }
}


export default Navbar;