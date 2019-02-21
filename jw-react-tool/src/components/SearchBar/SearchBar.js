import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';


const Header = styled.header`
    margin: 15px auto 0;
    display: flex;
    justify-content: space-between;
    width: 660px;
    height: 50px;
`;


const SearchBar = props => {
    return (
        <Header>
            <div className="instaParts">
                <img className="instaCam" src="/Images/InstagramCam.png" alt="Insta-Cam" />
                <img className="instaText" src="/Images/InstagramText.png" alt="Instagram" />
            </div>
            <form onSubmit={props.findPost}>
                <input 
                    className="searchField" 
                    type="text" 
                    placeholder='Search'
                    value={props.value}
                    name="search"
                    onChange={props.findPost}
                />
            </form>
            <div className="icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </Header>
    )
}

export default SearchBar;