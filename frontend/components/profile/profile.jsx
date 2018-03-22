import React from  'react'
import {Link} from 'react-router-dom'
import Display from './discover'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {display: ""};
        this.logout = this.logout.bind(this);
        this.switch = this.switch.bind(this);
    }


    logout(){
        debugger;
        return this.props.Logout()
            .then(() => this.props.history.push("/"))
    }

    switch(name){
        if (name === "discover"){
            this.setState({display: <Display/>})
        }
    }



    render(){



        let user_profile;
        if (this.props.CurrentUser.img_url === ""){
            user_profile = "https://s3.amazonaws.com/pexcel-aa/images/imgs/000/000/Web-img/avatar.png"
        }else{
            user_profile = this.props.CurrentUser.img_url;
        }
        return (
            <div className="profile-container">
                <div className="nav-profile">
                    <div className="logo">
                        <span><Link to="/">PEXCEL</Link></span>
                    </div>
                    <div className="link-container">
                        <ul>
                            <li><span>Discover</span></li>
                            <li><span to="/gallery">Gallery</span></li>
                            <li><span>Upload</span></li>
                            <li><span to="/profile">Profile</span></li>
                            <li onClick={this.logout}><span>Logout</span></li>
                        </ul>
                    </div>
                </div>
                <div className="profile-header">
                    <div className="profile-picture">
                        <img src={user_profile}/>
                    </div>
                    <div className="profile-info">
                        <ul>
                            <li>Followers:<span>{this.props.CurrentUser.number_followers}</span></li>
                            <li>Following:<span>{this.props.CurrentUser.number_followee}</span></li>
                            <li>Posts:<span>0</span></li>
                        </ul>

                    </div>
                </div>
                <div className="profile-content">
                    {this.state.display}
                </div>
            </div>
        )
    }
}






export default Profile;