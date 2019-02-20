import React, { Component } from 'react';
import './App.css';
import authenticate from './components/Authentication/Authenticate';
import LogIn from './components/LogIn/LogIn';
import PostPage from './components/PostContainer/PostsPage';


const Authenticate = authenticate(PostPage)(LogIn);

class App extends Component {
  

  render() {
    return (
      <div className="App">
          <Authenticate />
      </div>
    );
  }
}



export default App;
