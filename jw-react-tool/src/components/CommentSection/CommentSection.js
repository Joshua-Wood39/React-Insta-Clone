import React from 'react';

const CommentSection = props => {
    return (
        <div className="cSection">
            {props.comments.map(e=> (
                <div>
                    <p>{e.username} {e.text}</p>
                </div>
            ))}
            <input type="text" placeholder="Add a comment ..." />
        </div>
    )
}

export default CommentSection;