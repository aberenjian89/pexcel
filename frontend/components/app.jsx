import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {AuthRoute,ProtectedRoute} from "../utils/routes_util";
import LandingContainer from './splash/landing_container'
import AuthContainer from './session/auth_container'
import GalleryContainer from './profile/gallery_container'
import UploadContainer from './profile/upload_container'
import SettingContainer from './profile/settings_container'
import Discover from './profile/discover'

class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingContainer}/>
                    <AuthRoute path="/login" component={AuthContainer}/>
                    <AuthRoute path="/signup" component={AuthContainer}/>
                    <ProtectedRoute path="/discover" component={Discover}/>
                    <ProtectedRoute exact path="/profile" component={SettingContainer}/>
                    <ProtectedRoute exact path="/gallery" component={GalleryContainer}/>
                    <ProtectedRoute exact path="/upload" component={UploadContainer}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        )
    }
}


export default App;