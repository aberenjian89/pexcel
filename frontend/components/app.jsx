import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {AuthRoute,ProtectedRoute} from "../utils/routes_util";
import Landing from './splash/landing'

class App extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <Switch>
                    <Route to="/" component={Landing}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        )
    }
}


export default App;