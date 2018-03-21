import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.loginhandle = this.loginhandle.bind(this);
        this.formHandle = this.formHandle.bind(this);
    }

    componentWillMount(){
        if (this.props.errors.length > 0){
            this.props.ClearError();
        }
    }

    loginhandle(e) {
        e.preventDefault();


        return this.props.LoginUser(this.state)
            .then((user) => this.props.history.push("/profile"))
    }

    formHandle(name) {

        return (e) => (
            this.setState({[name]: e.currentTarget.value})
        )
    }

    render() {
        let errors = "";

        if (this.props.errors){
            errors=this.props.errors.map((err,idx)=>{
                return (
                    <li key={idx}>{err}</li>
                )
            })
        }

        return (
            <div className="main-container">
                <div className="auth-header">
                    <span>Login</span>
                </div>
                <div className="error-container">
                    <ul>
                        {errors}
                    </ul>
                </div>
                <div className="form-container">
                    <form id="loginform">
                        <div>
                            <label>Username</label>
                            <input type="text" name="username" onChange={this.formHandle("username")}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.formHandle("password")}/>
                        </div>
                        <div className="signin">
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/login">Demo</Link>
                            <input type="submit" value="Sign In ->" onClick={this.loginhandle}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}




export default Login;