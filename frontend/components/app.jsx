import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {AuthRoute,ProtectedRoute} from "../utils/routes_util";
import Landing from './splash/landing'
import AuthContainer from './login_signup/auth_container'

class App extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/login" component={AuthContainer}/>
                    <Route path="/signup" component={AuthContainer}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        )
    }
}


export default App;