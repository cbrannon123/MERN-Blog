import React, { Component } from 'react';
import { getPost, editPost } from '../../services/api';
import { Link } from 'react-router-dom';

class EditPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
            id: ''
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;

        getPost(id).then((post) => {
            this.setState({ id: post._id, title: post.title, body: post.body})
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        editPost(this.state).then((json) => {
            this.props.history.push(`/posts/${this.state.id}`)
        })
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleBody = (e) => {
        this.setState({body: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Edit Post</h1>
                <hr/>
                <form onSubmit={this.handleSubmit} >
                    <label>Post Title</label>
                    <input onChange={this.handleTitle} value={this.state.title} />
                    <br />
                    <label>Post Body</label>
                    <textarea onChange={this.handleBody} value={this.state.body}></textarea>
                    <br />
                    <input type="submit" value="Submit Post" />
                    <Link to={`/posts/${this.state.id}`}>cancle</Link>
                </form>
            </div>
        )
    }
}

export default EditPage;