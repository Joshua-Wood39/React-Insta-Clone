import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: 0,
        }
    }

    handleLike = () => {
        this.setState((prevState, props) =>{
            return {
                likeCount: prevState.likeCount + 1
            }
        })
    }

    mouseEHandle = (e) => {
        e.target.style.cursor= "pointer";
    }

    render() {
        
        return (
            <div className="pContainer">
                {this.props.dataArray.map(data => (
                    <div key={data.timestamp}>
                        <div className="header">
                            <div className="thumbCont"><img className="thumb" src={data.thumbnailUrl} alt={data.username} /></div>
                            <div className="headerName">{data.username}</div>
                        </div>
                        <div className="imgBigCont">
                            <img className="imgBig" src={data.imageUrl} alt={data.username} />
                        </div>
                        <div className="elBetween">
                            <button 
                                onMouseOver={this.mouseEHandle}
                                className="likeB" 
                                onClick={this.handleLike}>
                                    <i className="far fa-heart"></i>
                                </button>
                            <button className="commentB"><i className="far fa-comment"></i></button>
                        </div>
                        <h5 className="likes">{this.state.likeCount} likes</h5>
                        <CommentSection 
                            object = {data}
                        />
                    </div>
                ))}
            </div>
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