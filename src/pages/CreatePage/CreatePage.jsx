import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createPost } from '../../services/api';

class CreatePage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }

    handleTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    handleBody = (e) => {
        this.setState({ body: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        createPost(this.state).then(() => {
             this.props.history.push('/');
        })
    }

    render() {
        return (
            <div>
                <h1>Enter Post</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>Post Title</label>
                    <input onChange={this.handleTitle} value={this.state.title} />
                    <br/>

                    <label>Post Body</label>
                    <textarea onChange={this.handleBody} name='body' value={this.state.body}></textarea>
                    <br/>
                    <input type="submit" value="Submit Post"/>
                    <Link to='/'>Back</Link>
                </form>
            </div>
        )
    }
}


export default CreatePage;