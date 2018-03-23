import React from 'react'
import {Link} from 'react-router-dom'
import Typed from 'typed.js'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.loginhandle = this.loginhandle.bind(this);
        this.formHandle = this.formHandle.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.loginSpeed = 100;

    }

    componentWillMount(){
        if (this.props.errors.length > 0){
            this.props.ClearError();
        }
    }


    handleGuest(e) {
        e.preventDefault();
        this.demoLogin("username", "Demo", (
            () => this.demoLogin("password", '12345678', (
                () => this.props.LoginUser(this.state)
            ))
        ));
    }


    demoLogin(field, DemoUser, cb) {
        let textToType = "";
        const typing = () => {
            textToType = DemoUser.substring(0, textToType.length + 1);
            this.setState({ [field]: textToType });
            if (textToType.length === DemoUser.length) {
                setTimeout(() => cb(), this.loginSpeed);
            } else {
                setTimeout(() => typing(), this.loginSpeed);
            }
        };
        typing();
    }





    loginhandle(e) {
        e.preventDefault();
        return this.props.LoginUser(this.state)
            .then((user) => this.props.history.push("/profile"))
    }

    logindemo(){
        debugger;
        let username = new Typed('.username', {
            strings: ["Demo"],
            typeSpeed: 30
        });

        let password = new Typed('.password', {
            strings: ["12345678"],
            typeSpeed: 30
        });



    }

    formHandle(name) {

        return (e) => (
            this.setState({[name]: e.currentTarget.value})
        )
    }

    render() {
        let errors = "";

        if (this.props.errors.length > 0){
            errors=this.props.errors.map((err,idx)=>{
                return (
                    <li key={idx}><span>{err}</span></li>
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
                            <input type="text" name="username" className="username" value={this.state.username} onChange={this.formHandle("username")}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" className="password" value={this.state.password} onChange={this.formHandle("password")}/>
                        </div>
                        <div className="signin">
                            <Link  to="/signup">Sign Up</Link>
                            <button onClick={this.handleGuest}>Demo</button>
                            <input type="submit" value="Sign In ->" onClick={this.loginhandle}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}




export default Login;