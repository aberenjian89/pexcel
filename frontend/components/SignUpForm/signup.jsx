import React from 'react'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            email: "",
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    update(type){
        return (e) => this.setState({[type]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.CreateUser(this.state).then(() => this.props.history.push('/'))
    }

    render(){
        return(
            <div>
            <form>
                <label>Username:
                    <input type="text" onChange={this.update('username')} value={this.state.username}/>
                </label>
                <label>Password:
                    <input type="password" onChange={this.update('password')} value={this.state.password}/>
                </label>
                <label>Email:
                    <input type="text" onChange={this.update('email')} value={this.state.email}/>
                </label>
                <input type="submit" onClick={this.handleSubmit} value="Sign Up"/>
            </form>
            </div>
        )
    }
}


export default SignUp;