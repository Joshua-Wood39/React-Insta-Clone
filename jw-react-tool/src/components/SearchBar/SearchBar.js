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

const InstaParts = styled.div`
    display: flex;
`;

const InstaCam = styled.img`
    max-width: 45px;
    margin-left: 10px;
`

const InstaText = styled.img`
    max-width: 150px;
    margin-left: 25px;
`;

const SearchField = styled.input`
    height: 25px;
    font-size: 1.1rem;
    align-self: center;
    margin-top: 10px;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

const SearchBar = props => {
    return (
        <Header>
            <InstaParts>
                <InstaCam src="/Images/InstagramCam.png" alt="Instagram Logo" />
                <InstaText src="/Images/InstagramText.png" alt="Instagram" />
            </InstaParts>
            <form>
                <SearchField
                    type="text" 
                    placeholder='Search'
                    value={props.value}
                    name="search"
                    onChange={props.findPost}
                />
            </form>
            <Icons>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </Icons>
        </Header>
    )
}

export default SearchBar;