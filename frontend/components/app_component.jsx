import React from 'react'
import NavbarContainer from './navbar/navbar_container'
import AuthContainer from './auth_component/auth_container'

class AppComponent extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
        <div>
            <AuthContainer/>
            <NavbarContainer/>
        </div>
        )
    }
}

export default AppComponent