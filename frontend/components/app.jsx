import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {AuthRoute,ProtectedRoute} from "../utils/routes_util";
import Landing from './splash/landing'
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
                    <Route exact path="/" component={Landing}/>
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