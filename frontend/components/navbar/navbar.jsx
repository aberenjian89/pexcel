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
        let usermenu;
        let extramenu;

        if (this.props.currentUser){
            usermenu =(
                    <ul className="user-info">
                        <li><h3>Welcome {this.props.currentUser.username}</h3></li>
                        <li><Link onClick={this.logout} to='/login'>Logout</Link></li>
                    </ul>

                    )
            extramenu = (
                <div className="links-currentuser">
                    <h1><Link to='/'>PEXCEL</Link></h1>
                    <ul>
                        <li><Link to="/">Discover</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>
                </div>
            )
        }else{

            if (this.props.location.pathname === '/'){
                usermenu=(
                    <ul className="nav-login">
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link activeClassName="signup" to="/signup">Sign up</Link></li>
                        <li><Link onClick={this.loginDemo} to="/profile">Demo</Link></li>
                    </ul>
                )


                extramenu = (
                    <div className="links">
                        <h1><Link to='/'>PEXCEL</Link></h1>
                        <ul>
                            <li><Link to="/">Discover</Link></li>
                            <li><Link to="/">About</Link></li>
                        </ul>
                    </div>
                )


            }
            else if (this.props.location.pathname === '/signup') {
                usermenu=(
                    <ul className="nav-session">
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link onClick={this.loginDemo} to="/profile">Demo</Link></li>
                    </ul>
                )

                extramenu = (
                    <div className="links-currentuser">
                        <h1><Link to='/'>PEXCEL</Link></h1>
                        <ul>
                            <li><Link to="/">Discover</Link></li>
                            <li><Link to="/">About</Link></li>
                        </ul>
                    </div>)
            }else{
                usermenu=(
                <ul className="nav-session">
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link onClick={this.loginDemo} to="/profile">Demo</Link></li>
                </ul>
                )

                extramenu = (
                    <div className="links-currentuser">
                        <h1><Link to='/'>PEXCEL</Link></h1>
                        <ul>
                            <li><Link to="/">Discover</Link></li>
                            <li><Link to="/">About</Link></li>
                        </ul>
                    </div>)
            }
        }


        return (
            <div className="navbar">
                {extramenu}
                {usermenu}
            </div>
        )
    }
}


export default Navbar;