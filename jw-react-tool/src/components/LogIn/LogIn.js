import React from 'react';
import './LogIn.css';




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
            <div>
                <form onSubmit={this.logInHandler}>
                <div className="logIn">
                    <input 
                        className="username" 
                        type="text" 
                        value={this.state.userText} 
                        onChange={this.changeHandler} 
                        name="userText"
                        placeholder="--Name--"
                    />
                    <input 
                        className="password" 
                        type="text" 
                        value={this.state.passText} 
                        onChange={this.changeHandler} 
                        name="passText"
                        placeholder="--Password--"
                    /> 
                    <button className="logButt">Log In</button>
                </div>
                </form>
            </div>
        )
    }
}

export default LogIn;