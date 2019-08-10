import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getPosts, upvotePost } from '../../services/api'
import './IndexPage.css'


class IndexPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getPosts().then((json) => {
            this.setState({ posts: json })
        })
    }

    handleUpvote = (id, type) => {
        upvotePost(id, type).then((json) => {
            getPosts().then((posts) => {
                this.setState({ posts: posts })
            })
        })
    }

    render() {

        var posts = this.state.posts.map((post, idx) => {

            return (
                <li key={idx}>
                    <Link to={`/posts/${post._id}`}>{post.title}</Link>  <span>votes: {post.upvotes}</span>
                    <br />
                    
                    <br />
                    <br />
                    
                    
                </li>
            )
        });
        return (
            <div>
                <NavBar
                    user={this.props.user}
                    handleLogOut={this.props.handleLogOut}
                />
                <h2>Blog App {<Link to={'/create/'}>Create</Link>}</h2>
                <hr />
                <br />

                <ul>
                    {posts}
                </ul>
            </div>
        );
    }

}



export default IndexPage