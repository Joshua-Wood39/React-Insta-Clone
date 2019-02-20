import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../dummy-data';


class PostsPage extends React.Component {
    constructor () {
        super();
        this.state = {
          dummy: [],
          filtered: [],
        }
      }
    
    componentDidMount() {
      this.setState({ dummy: dummyData, filtered: dummyData})
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
            <div>
                <SearchBar findPost = {this.handleSearch} />
                <PostContainer dataArray = {this.state.dummy} />
            </div>
        )
        }
}

export default PostsPage;