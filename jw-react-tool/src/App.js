import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


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
      </div>
    );
  }
}

export default App;
