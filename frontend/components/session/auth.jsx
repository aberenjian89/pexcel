import React from 'react'
import LoginContainer from './login_container'
import NewuserContainer from './newuser_container'




class Auth extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        let form_selection="";
        if (this.props.match.path === '/login') {
            form_selection = (
                <LoginContainer/>
            )
        }
        else{
            form_selection =(
                <NewuserContainer/>
            )
        }



        return (
            <div className="auth-container">
                <div className="auth-image"></div>
                <div className="auth-forms">
                    {form_selection}
                </div>
            </div>
        )
    }
}


export default Auth;