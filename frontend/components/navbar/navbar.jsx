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
                <div>
                    <ul>
                        <li><h3>Welcome {this.props.currentUser.username}</h3></li>
                        <li><Link onClick={this.logout} to='/login'>Logout</Link></li>
                    </ul>
                </div>
                    )
        }else{
            display =(
                <div>
                    <ul>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                        <li><Link onClick={this.loginDemo} to="/profile">Demo</Link></li>
                    </ul>
                </div>)
        }
        return (
            <div className="navbar">
                {display}
            </div>
        )
    }
}


export default Navbar;