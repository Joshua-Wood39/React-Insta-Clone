import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from '/Users/rayfairley/GitProjects/7LambdaWeek/React-Insta-Clone/dummy-data';

class App extends Component {
  constructor () {
    super();
    this.state = {
      dummy: dummyData,
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
