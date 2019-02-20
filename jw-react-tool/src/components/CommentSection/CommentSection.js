import React from 'react';
import './CommentSection.css';
import moment from 'moment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: '',
            comments: props.object.comments,
        }
    }

    handleChanges = (e) => {
        this.setState({ newComment: e.target.value})
    }

    addNewComment = (e) => {
        e.preventDefault();
        this.setState({comments: [...this.state.comments, {username: localStorage.getItem('username') ,text: this.state.newComment}], newComment: ''});
    }

    render(){
        console.log(this.state.comments);
        return (
            <div className="cSection">
                {this.state.comments.map(e => (
                    <div className="textBlock">
                        <p className="textName">{e.username}</p> 
                        <p className="textContent">{e.text}</p>
                    </div>
                ))}
                <h4 className="timeS">{moment().startOf('hour').fromNow()} </h4>
                <form onSubmit={this.addNewComment}>
                    <input 
                        className="commentBox" 
                        type="text" 
                        placeholder="Add a comment ..."
                        value={this.state.newComment}
                        onChange={this.handleChanges}
                    />
                </form>
            </div>
        )
    }
}

export default CommentSection;