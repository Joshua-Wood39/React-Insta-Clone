import React from 'react';
import './CommentSection.css';
import moment from 'moment';

const CommentSection = props => {
    return (
        <div className="cSection">
            {props.comments.map(e=> (
                <div className="textBlock">
                    <p className="textName">{e.username}</p> 
                    <p className="textContent">{e.text}</p>
                </div>
            ))}
            <h4 className="timeS">{moment().startOf('hour').fromNow()} </h4>
            <input className="commentBox" type="text" placeholder="Add a comment ..." />

        </div>
    )
}

export default CommentSection;