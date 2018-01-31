import React from 'react'


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
        };
        this.update= this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
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


    render(){
        return(
            <form>
                <label>Username:
                    <input type="text" onChange={this.update('username')} value={this.state.username}/>
                </label>
                <label>Password:
                    <input type="password" onChange={this.update('password')} value={this.state.password}/>
                </label>
                <input type= "submit" onClick={this.handleSubmit} value="Login"/>
            </form>
        )
    }
}

export default SessionForm;