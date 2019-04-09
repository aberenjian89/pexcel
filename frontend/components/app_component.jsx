import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import {AuthRoute,ProtectedAuth} from "./Auth_guard";

import NavbarContainer from './navbar/navbar_container'
import AuthContainer from './auth_component/auth_container'
import LandingComponent from './landing_component/landing_component'
import UploadContainer from './upload_component/upload_container'

class AppComponent extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
        <div>
            <AuthContainer/>
            <UploadContainer/>
            <NavbarContainer/>
            <Switch>
                <Route exact path='/' component={LandingComponent}/>
            </Switch>
        </div>
        )
    }
}

export default AppComponent