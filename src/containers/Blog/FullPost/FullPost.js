import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidMount() {
        const macthId = this.props.match.params.id;
        if(macthId) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== macthId)) {
                axios.get(`/posts/${macthId}`)
                    .then(response => {
                        console.log(response);
                        this.setState({
                            loadedPost: response.data
                        })
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(response => {
                console.log(response)
            })
    }
    render () {
        const macthId = this.props.match.params.id;
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if(macthId) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button 
                            className="Delete"
                            onClick={this.deletePostHandler}
                        >Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;