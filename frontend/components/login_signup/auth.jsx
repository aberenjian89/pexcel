import React from 'react'


class Auth extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className="auth-container">
                <div className="auth-image"></div>
                <div className="auth-forms">
                    <form>
                        <div>
                            <label>Username:</label>
                            <input type="text"/>
                            <label>Password:</label>
                            <input type="password"/>
                            <input type="submit" value="login"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Auth;