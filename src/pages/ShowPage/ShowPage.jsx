import React, { Component } from 'react';
import { getPost, deletePost, upvotePost, addComment } from '../../services/api';
import { Link } from 'react-router-dom';


class ShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
            comments: [],
            commentBody: '',
            upvotes: ''
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;

        getPost(id).then(function (post) {
            self.setState({
                id: post._id, title: post.title,
                body: post.body, comments: post.comments,
                upvotes: post.upvotes
            })
        })
    }

    handleDelete = (id) => {
        deletePost(id).then(() => {
            this.props.history.goBack();
        })
    }

    handleUpvote = (id, type) => {
        upvotePost(id, type).then((json) => {
            getPost(id).then((post) => {
                this.setState({
                    id: post._id, title: post.title,
                    body: post.body, comments: post.comments,
                    upvotes: post.upvotes, commentBody: ''
                })
            })
        })
    }

    handleDownvote = (id, type) => {
        upvotePost(id, type).then((json) => {
            getPost(id).then((post) => {
                this.setState({
                    id: post._id, title: post.title,
                    body: post.body, comments: post.comments,
                    upvotes: post.upvotes, commentBody: ''
                })
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        addComment(this.state.id, this.state.commentBody).then((json) => {
            getPost(this.state.id).then((post) => {
                this.setState({
                    id: post._id, title: post.title,
                    body: post.body, comments: post.comments,
                    commentBody: '', upvotes: post.upvotes
                })
            })
        })
    }

    handlleCommentBody = (e) => {
        this.setState({ commentBody: e.target.value })
    }

    render() {
        var comments = this.state.comments.map((comment, idx) => {
            return (
                <li key={idx}>
                    {comment.body}
                </li>
            )
        });

        return (
            <div>
                <h2>{this.state.title}</h2> <span>votes: {this.state.upvotes}</span>
                <br />
                <p>{this.state.body}</p>
                <button onClick={() => this.handleUpvote(this.state.id, 'upvote')}>Upvote<i>^</i></button>
                <button onClick={() => this.handleDownvote(this.state.id, 'downvote')}>Downvote<i>V</i></button>
                <button onClick={() => this.handleDelete(this.state.id)}>Delete</button>
                <Link to={`/posts/${this.state.id}/edit`}>Edit</Link>
                <Link to='/'>Back</Link>
                <br />
                <hr />
                {this.state.comments.length < 1 ?
                    <h2>No Comments</h2>
                    :
                    <ul>
                        {comments}
                    </ul>
                }
                <br/>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <textarea onChange={this.handlleCommentBody} value={this.setState.commentBody}></textarea>
                    <br/>
                    <input type='submit' value='Add Comment'/>
                </form>
            </div>
        )
    }
}



export default ShowPage;