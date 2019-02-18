import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="pContainer" key={props.dataArray.timestamp}>
            {props.dataArray.map(data => (
                <div>
                    <div className="header">
                        <div className="thumbCont"><img className="thumb" src={data.thumbnailUrl} alt={data.username} /></div>
                        <div className="headerName">{data.username}</div>
                    </div>
                    <div className="imgBigCont">
                        <img className="imgBig" src={data.imageUrl} alt={data.username} />
                    </div>
                    <div className="elBetween">
                        <button className="likeB"><i className="far fa-heart"></i></button>
                        <button className="commentB"><i class="far fa-comment"></i></button>
                        <h4 className="timeS">** timeStamp **</h4>
                    </div>
                    <h5 className="likes">{data.likes} likes</h5>
                    <CommentSection 
                        comments = {data.comments}
                    />
                </div>
            ))}
        </div>
    )
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