import React from 'react'
import {Link} from 'react-router-dom'
class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            email: "",
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }


    componentWillUnmount(){
        this.props.ClearError();
    }


    update(type){
        return (e) => this.setState({[type]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.CreateUser(this.state).then(() => this.props.history.push('/'))
    }

    renderErrors(){
        let errors="";
        if (this.props.errors.length > 0){
            errors=this.props.errors.map((err,id) => <li key={id}>{err}</li>)
        }
        return (
            <ul>
                {errors}
            </ul>
        )
    }

    render(){
        return(
            <div className="signup">
                <h4>Join PEXCEL</h4>
                <div className="subheader">
                    <span>Share your photos, get inspired, and grow your skills.</span>
                </div>
                {this.renderErrors()}
            <form>
                <label>Username</label>
                <input type="text" onChange={this.update('username')} value={this.state.username}/>
                <label>Password</label>
                <input type="password" onChange={this.update('password')} value={this.state.password}/>
                <label>Email</label>
                <input type="text" onChange={this.update('email')} value={this.state.email}/>
                <input type="submit" onClick={this.handleSubmit} value="Sign Up"/>
            </form>
                <div className="signup-link">
                    <span>Already have an account?</span>
                    <Link to="/login"> Log in</Link>
                </div>
            </div>
        )
    }
}


export default SignUp;