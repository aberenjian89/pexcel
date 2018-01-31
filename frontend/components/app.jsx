import React from 'react';
import {Route,Switch} from 'react-router-dom'
import SessionFormContainer from './SessionForm/session_form_container'
import SignUpFormContainer from './SignUpForm/signup_form_container';
import {AuthRoute,ProtectedRoute} from "../utils/routes_util";
import NavbarContainer from "./navbar/navbar_container";

class App extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <NavbarContainer/>
                <Switch>
                    <AuthRoute path="/login" component={SessionFormContainer}/>
                    <AuthRoute path="/signup" component={SignUpFormContainer} />
                </Switch>
            </div>
        )
    }
}


export default App;