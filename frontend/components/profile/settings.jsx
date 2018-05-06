import React from 'react'
import ProfileContaienr from './profile_container'

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state = { imageStatus: "loading" };

    }

    handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
    }

    render(){

        let user_profile;
        if (this.props.CurrentUser.img_url === ""){
            user_profile = "https://s3.amazonaws.com/pexcel-aa/images/imgs/000/000/Web-img/avatar.png"
        }else{
            user_profile = this.props.CurrentUser.img_url;
        }
        return (
            <div>
                <ProfileContaienr/>
                <div className="settings-container">
                    <div className="profile-header">
                        <div className="profile-picture">
                            <img src={user_profile} onLoad={this.handleImageLoaded.bind(this)}/>
                        </div>
                        <div className="profile-info">
                            <ul>
                                <li>Followers:<span>{this.props.CurrentUser.number_followers}</span></li>
                                <li>Following:<span>{this.props.CurrentUser.number_followee}</span></li>
                                <li>Posts:<span>0</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="user-form">
                        <form>
                            <div>
                                <label>Username: </label>
                                <input type="text" name="username" value={this.props.CurrentUser.username} disabled/>
                            </div>
                            <div>
                                <label>First Name:</label>
                                <input type="text" name="firstname"/>
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input type="text" name="lastname"/>
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" name="password"/>
                            </div>
                            <div>
                                <input type="submit" value="Update"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Settings;