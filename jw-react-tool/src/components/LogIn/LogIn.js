import React from 'react';




class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userText: '',
            passText: '',
        }
    }

changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
}

logInHandler = e => {
    e.preventDefault();
    localStorage.setItem('username', this.state.userText);
    window.location.reload();
}

    render() {
        return (
            <div className="logIn">
                <form onSubmit={this.logInHandler}>
                    <input className="username" type="text" value={this.state.userText} onChange={this.changeHandler} name="userText"/>
                    <input className="password" type="text" value={this.state.passText} onChange={this.changeHandler} name="passText"/> 
                    <button className="logButt">Log In</button>
                </form>
            </div>
        )
    }
}

export default LogIn;