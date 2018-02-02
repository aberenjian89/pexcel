import React from 'react'
import {Link} from 'react-router-dom';
import Spinner from '../Ui/Spinner'

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
        };
        this.update= this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.loggedIn){
            this.props.history.push('/profile')
        }
    }

    componentWillUnmount(){
        this.props.ClearError();
    }


    update(type){
        return (e)=>(
            this.setState({[type]: e.target.value})
        )
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.LoginUser(this.state)
            .then(() => this.props.history.push('/profile'))
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
            <div className="session">
                <h4>Log In to PEXCEL</h4>
                <div className="error-display">
                    {this.renderErrors()}
                </div>
                <form>
                    <label>Username</label><br/>
                    <input type="text" onChange={this.update('username')} value={this.state.username} /><br/>
                    <div className="password">
                         <label>Password</label><br/>
                         {/*<Link to="#">Forgot Password?</Link>*/}
                    </div>
                    <input type="password" onChange={this.update('password')} value={this.state.password} /><br/>
                    <input type= "submit" onClick={this.handleSubmit} value="Log in"/>
                </form>
                <div className="signup-link">
                    <span>Don't have an account?</span>
                    <Link to="/signup"> Sign Up</Link>
                </div>
            </div>
        )
    }
}

export default SessionForm;