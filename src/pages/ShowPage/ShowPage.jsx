import React, { Component } from 'react';
import { getPost } from '../../services/api';


class ShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',

        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;

        getPost(id).then(function (post) {
            self.setState({
                id: post._id,
                title: post.title,
                body: post.body
            })
        })
    }

    render() {

        return (
            <div>
                <h2>{this.state.title}</h2>
                <br />
                <p>{this.state.body}</p>
            </div>
        )
    }
}



export default ShowPage;