import React from 'react'


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
            this.props.history.push('/')
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
                {this.renderErrors()}
                <form>
                    <label>Username:
                        <input type="text" onChange={this.update('username')} value={this.state.username}/>
                    </label>
                    <label>Password:
                        <input type="password" onChange={this.update('password')} value={this.state.password}/>
                    </label>
                    <input type= "submit" onClick={this.handleSubmit} value="Login"/>
                </form>
            </div>
        )
    }
}

export default SessionForm;