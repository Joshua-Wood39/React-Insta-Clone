import React from 'react';
import './CommentSection.css';
const CommentSection = props => {
    return (
        <div className="cSection">
            {props.comments.map(e=> (
                <div className="textBlock">
                    <p className="textName">{e.username}</p> 
                    <p className="textContent">{e.text}</p>
                </div>
            ))}
            <input className="commentBox" type="text" placeholder="Add a comment ..." />
        </div>
    )
}

export default CommentSection;