import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="pContainer" key={props.dataArray.timestamp}>
            {props.dataArray.map(data => (
                <div>
                    <div className="header">
                        <div className="thumb"><img src={data.thumbnailUrl} alt={data.username} /></div>
                        <div className="headerName">{data.username}</div>
                    </div>
                    <img src={data.imageUrl} alt={data.username} />
                    <div className="elBetween">
                        <button>Like</button>
                        <button>Comment</button>
                        <h4>TimeStamp</h4>
                    </div>
                    <h5>{data.likes}</h5>
                    <CommentSection 
                        comments = {data.comments}
                    />
                </div>
            ))}
        </div>
    )
}

export default PostContainer;