import React, { Component } from 'react';
import { createPosts } from '../../services/api'

class Create extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }

    render() {
        return (
            <div>Hllo From Create</div>
        )
    }
}


export default Create;