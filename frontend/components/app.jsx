import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {AuthRoute,ProtectedRoute} from "../utils/routes_util";
import NavbarContainer from "./navbar/navbar_container";
import {SessionBackground} from "./session_background/session_background";
import HomeFeed from "./HomeFeed/header";
import Spinner from './Ui/Spinner'
class App extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <NavbarContainer/>
                <Switch>
                    <Route exact path="/" component={HomeFeed}/>
                    <Route path="/image/:image_id" component={SessionBackground}/>
                    <ProtectedRoute path="/upload/:user_id/image" component={SessionBackground}/>
                    <ProtectedRoute exact  path="/profile" component={SessionBackground} />
                    <AuthRoute exect path="/login" component={SessionBackground}/>
                    <AuthRoute path="/signup" component={SessionBackground} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        )
    }
}


export default App;