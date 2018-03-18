import React from 'react'
import {Link} from 'react-router-dom'

class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "",password: "",email: ""}
    }





    render(){
        let form_selection="";
        if (this.props.match.path === '/login'){
            form_selection = (
                <div className="main-container">
                    <div className="auth-header">
                        <span>Login</span>
                    </div>
                    <div className="form-container">
                        <form>
                            <div>
                                <label>Username</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password"/>
                            </div>
                            <div className="signin">
                                <Link to="/signup">Sign Up</Link>
                                <Link to="/login">Demo</Link>
                                <input type="submit" value="Sing In ->"/>
                            </div>
                        </form>
                    </div>

                </div>
            )
        }else{
            form_selection=(
                <div className="main-container">
                    <div className="auth-header">
                        <span>Sign Up</span>
                    </div>
                    <div className="form-container">
                        <form>
                            <div>
                                <label>Username</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password"/>
                            </div>
                            <div className="signup">
                                <Link to="/login">Sign In</Link>
                                <input type="submit" value="Sing Up ->"/>
                            </div>
                        </form>
                    </div>

                </div>
            )
        }



        return (
            <div className="auth-container">
                <div className="auth-image">
                    {/*<div className="quote-img">*/}
                        {/*<span>*/}
                            {/*COLLECT MOMENTS*/}
                        {/*</span>*/}
                        {/*<span>*/}
                            {/*AND SHARE IT WITH FRIENDS*/}
                        {/*</span>*/}
                    {/*</div>*/}
                </div>
                <div className="auth-forms">
                    {form_selection}
                </div>
            </div>
        )
    }
}


export default Auth;