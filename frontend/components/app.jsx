import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {AuthRoute,ProtectedRoute} from "../utils/routes_util";
import LandingContainer from './splash/landing_container'
import AuthContainer from './session/auth_container'
import ProfileContainer from './profile/profile_container'

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
                    <ProtectedRoute exact path="/profile" component={ProfileContainer}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        )
    }
}


export default App;