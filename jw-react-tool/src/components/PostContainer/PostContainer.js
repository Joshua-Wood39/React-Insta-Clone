import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PContainer = styled.div`
    max-width: 660px;
    margin: auto;
`;

const Identifiers = styled.div`
    display: flex;
`;

const ThumbContainter = styled.div`
    width: 80px;
    height: 80px;
    margin: 10px;
    border-radius: 50%;
    overflow: hidden;
`;

const Thumb = styled.img`
    max-width: 80px;
    max-height: 80px;
`;

const IndentName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    align-self: center;
`;

const ImgCont = styled.div`
    width: 640px;
    margin: auto;
`;

const BigImg = styled.img`
    max-width: 640px;
`;



class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    

    

    render() {
        console.log(this.state.likeCount);
        return (
            <PContainer>
                {this.props.dataArray.map((data, index) => 
                    <div key={data.timestamp}>
                    <Identifiers>
                        <ThumbContainter><Thumb src={data.thumbnailUrl} alt={data.username} /></ThumbContainter>
                        <IndentName>{data.username}</IndentName>
                    </Identifiers>
                    <ImgCont>
                        <BigImg src={data.imageUrl} alt={data.username} />
                    </ImgCont>
                    
                    <CommentSection 
                        object = {data}
                        
                    />
                </div>
                    )}
                
            </PContainer>
        )
    }
}

PostContainer.propTypes = {
    dataArray: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string, 
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )

        })
    )
}

export default PostContainer;