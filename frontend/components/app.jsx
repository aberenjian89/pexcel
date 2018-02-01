import React from 'react';
import {Route,Switch} from 'react-router-dom'
import {AuthRoute,ProtectedRoute} from "../utils/routes_util";
import NavbarContainer from "./navbar/navbar_container";
import {SessionBackground} from "./session_background/session_background";
import HomeFeed from "./HomeFeed/header";

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
                    <AuthRoute path="/login" component={SessionBackground}/>
                    <AuthRoute path="/signup" component={SessionBackground} />
                </Switch>
            </div>
        )
    }
}


export default App;