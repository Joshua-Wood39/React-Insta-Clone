import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from '/Users/rayfairley/GitProjects/7LambdaWeek/React-Insta-Clone/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';

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
          <SearchBar />
          <PostContainer dataArray={this.state.dummy}/>
          <CommentSection />
      </div>
    );
  }
}

export default App;
