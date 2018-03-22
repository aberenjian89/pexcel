import React from  'react'
import {Link} from 'react-router-dom'



class Profile extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this)
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
                        <ul>
                            <li><span>Discover</span></li>
                            <li><span>Gallery</span></li>
                            <li><span>Upload</span></li>
                            <li onClick={this.logout}><span>Logout</span></li>
                        </ul>
                    </div>
                </div>
                <div className="profile-header">
                    <div onClick="profile-picture">

                    </div>
                    <div className="profile-info">

                    </div>
                </div>
                <div className="profile-content">

                </div>
            </div>
        )
    }
}






export default Profile;