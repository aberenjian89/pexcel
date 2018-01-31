import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.logout= this.logout.bind(this);

    }

    logout(){
        return this.props.logoutuser()
           // .then(() => this.props.history.push('/login'))
    }



    render(){
        let display;
        if (this.props.currentUser){
            display =(
                <div>
                    <h3>Welcome {this.props.currentUser.username}</h3>
                    <Link onClick={this.logout} to='/login'>Logout</Link>
                </div>
                    )
        }else{
            display =(
                <div>
                    <Link to="/login">Login</Link>
                    <br/>
                    <Link to="/signup">Sign Up</Link>
                </div>)
        }
        return (
            <div>
                
                {display}
            </div>
        )
    }
}


export default Navbar;