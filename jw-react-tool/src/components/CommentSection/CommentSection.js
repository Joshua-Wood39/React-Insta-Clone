import React from 'react';
import './CommentSection.css';
import moment from 'moment';
import styled from 'styled-components';

const LikeCont = styled.div`
    display: flex;
    border: 2px solid red;
`;

const LikeClicker = styled.div`
    margin: 5px 10px;
    font-size: 2rem;
`;

const Likes = styled.h5`
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Bubble = styled.div`
    font-size: 2rem;
    margin: 5px 0;
`;

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: '',
            comments: this.props.object.comments,
            likeCount: this.props.object.likes,
        }
    }

    handleLike = (index) => {
        let likey = this.state.likeCount + 1;
        this.setState({ likeCount: likey})
    }

    mouseEHandle = (e) => {
        e.target.style.cursor= "pointer";
    }

    handleChanges = (e) => {
        this.setState({ newComment: e.target.value})
    }

    addNewComment = (e) => {
        e.preventDefault();
        this.setState({comments: [...this.state.comments, {username: localStorage.getItem('userName') ,text: this.state.newComment}], newComment: ''});
    }

    render(){
        console.log(this.state.likeCount);
        return (
            <div className="cSection">
                <LikeCont>
                    <LikeClicker 
                        onMouseOver={this.mouseEHandle}
                        onClick={this.handleLike}>
                        <i className="far fa-heart"></i>
                        <Likes>{ this.state.likeCount} likes</Likes>
                    </LikeClicker>
                    <Bubble><i className="far fa-comment"></i></Bubble>
                </LikeCont>
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