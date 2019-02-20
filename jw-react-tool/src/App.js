import React, { Component } from 'react';
import './App.css';
import dummyData from './components/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor () {
    super();
    this.state = {
      dummy: [],
      filtered: [],
    }
  }

componentDidMount() {
  this.setState({ dummy: dummyData})
}

handleSearch = e => {
  let currentList = [];
  let newList = [];

  
      currentList = this.state.dummy;
      newList = currentList.filter(item => {
          const lc = item.username.toLowerCase();
          const filter = e.target.value.toLowerCase();
          return lc.includes(filter);
      });

  this.setState({
      filtered: newList,
  });
}

  render() {
    return (
      <div className="App">
          <SearchBar 
            findPost={this.handleSearch}
          />
          <PostContainer dataArray={this.state.dummy}/>
      </div>
    );
  }
}

export default App;
