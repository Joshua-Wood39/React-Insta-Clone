import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="searchB">
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
        </div>
    )
}

export default SearchBar;