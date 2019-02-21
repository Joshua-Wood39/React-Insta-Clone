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
            search:''
        }
    }
    
    componentDidMount() {
        this.setState({ dummy: dummyData, filtered: dummyData})
    }
    
    changeHandler = e => {
        this.setState({ search: e.target.value});
    }
    
    handleSearch = e => {
        this.setState({ search: e.target.value});
    

        let coreDummy = this.state.filtered;
        let filteredDummy = this.state.filtered.filter(
            (contact) => {
                return contact.username.indexOf(this.state.search) !== -1;
            }
        
        )
        if (this.state.search !== "") {
            this.setState({dummy: filteredDummy})
        } else {
            this.setState({dummy: coreDummy})
        }

    }

    render() {
        console.log(this.state.search);
        return (
            <div>
                <SearchBar 
                    findPost = {this.handleSearch} 
                    changeHandler = {this.changeHandler}
                />
                <PostContainer dataArray = {this.state.dummy} />
            </div>
        )
        }
}

export default PostsPage;