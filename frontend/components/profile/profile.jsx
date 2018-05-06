import React from  'react'
import {Link} from 'react-router-dom'
import Discover from './discover'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {display: <Discover/>,
                      UserImgs: "",
                      open: false};
        this.logout = this.logout.bind(this);


    }


    componentWillMount(){

        if (Object.keys(this.props.UserImgs).length <= 0){
            this.props.FetchUserImgs(this.props.CurrentUser.id)
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({UserImgs: nextProps.UserImgs})
    }

    logout(){
        debugger;
        return this.props.Logout()
            .then(() => this.props.history.push("/"))
    }


    render(){
        return (
            <div className="profile-container">
                <div className="nav-profile">
                    <div className="logo">
                        <span><Link to="/">PEXCEL</Link></span>
                    </div>
                    <div className="link-container">
                        <div>
                            <span>Welcome {this.props.CurrentUser.username}</span>
                        </div>
                        <ul>
                            <li><Link to="/discover">Discover</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/upload">Upload</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li onClick={this.logout}><span>Logout</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}






export default Profile;