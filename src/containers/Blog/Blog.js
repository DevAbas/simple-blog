import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        selectedId: null,
        error: false
    }
    

    selectedPostHandler = (id) => {
        this.setState({ selectedId: id })
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/new-post" activeClassName="active">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/posts/:id" component={FullPost} />
            </div>
        );
    }
}

export default Blog;