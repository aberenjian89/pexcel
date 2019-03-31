import React from 'react';
import {connect} from 'react-redux';
import {Redirect,Route,withRouter} from 'react-router-dom';


const mapStateToProps = (state)=> {
    return {
        Logged_In: Boolean(state.Session.current_user)
    }
}

const Auth = ({Logged_In,path,component: Component}) =>(
    <Route
        path={path}
        render = {props => (
            Logged_In ? <Redirect to='/'/> : <Component {...props}/>
        )}
    />
)

const Protected = ({Logged_In,path,component: Component}) =>(
    <Route
        path={path}
        render = {props => {
           return ( Logged_In ? <Component {...props}/> : <Redirect to='/'/>)
        }}
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedAuth = withRouter(connect(mapStateToProps)(Protected))