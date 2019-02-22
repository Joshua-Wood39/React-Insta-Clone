import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../dummy-data';


class PostsPage extends React.Component {
    constructor () {
        super();
        this.state = {
            dummy: dummyData,
            filtered: [1, 2, 3, 4, 5],
            search:''
        }
    }
    
    componentDidMount() {
        this.setState({ dummy: dummyData})
    }
    
    
    
    handleSearch = e => {
        this.setState({ search: e.target.value});
    
        let filteredDummy = this.state.dummy.filter(
            (contact) => {
                return contact.username.indexOf(this.state.search) !== -1;
            }
        
        )
        
        this.setState({filtered: filteredDummy})
    }

    render() {
        console.log(this.state.dummy);
        return (
            <div>
                <SearchBar 
                    findPost = {this.handleSearch} 
                />
                <PostContainer 
                    dataArray = {
                        this.state.search === "" 
                            ? this.state.dummy
                            : this.state.filtered
                        }
                />


                {/* {this.state.dummy.map(e => <PostContainer dataArray = {e} />)} */}
            </div>
        )
        }
}

export default PostsPage;