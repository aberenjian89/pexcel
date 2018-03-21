import React from 'react'
import {Link} from 'react-router-dom'



class Newuser extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "",password: "",email: ""};
        this.signuphandle = this.signuphandle.bind(this);
        this.formHandle = this.formHandle.bind(this);
    }

    componentWillMount(){
        if (this.props.errors.length > 0){
            this.props.ClearError();
        }
    }


    signuphandle(){
       return this.props.CreateUser(this.state)
            .then((user) => this.props.history.push("/profile"))
    }


    formHandle(name){

        return (e)=>(
            this.setState({[name]: e.currentTarget.value})
        )
    }


    render(){

        let errors = "";
        if (this.props.errors){
            errors=this.props.errors.map((err,idx)=>{
                return (
                    <li key={idx}>{err}</li>
                )
            })
        }

        return(
            <div className="main-container">
                <div className="auth-header">
                    <span>Sign Up</span>
                </div>
                <div className="error-signup-container">
                    <ul>
                        {errors}
                    </ul>
                </div>
                <div className="form-container">
                    <form>
                        <div>
                            <label>Username</label>
                            <input type="text" name="username" value={this.state.username} onChange={this.formHandle("username")}/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name="email" value={this.state.email} onChange={this.formHandle("email")}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.formHandle("password")} />
                        </div>
                        <div className="signup">
                            <Link to="/login">Sign In</Link>
                            <input type="submit" value="Sign Up ->" onClick={this.signuphandle}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Newuser;