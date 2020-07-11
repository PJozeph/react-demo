import React, { Component } from 'react';

import './Blog.css';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from '../../containers/Posts/Posts'
import FullPost from '../FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from '../../containers/NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('../../containers/NewPost/NewPost');
});


class Blog extends Component {

    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                            >Posts</NavLink> </li>
                            <li><NavLink to={{ pathname: '/new-post', }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={()=> <h1>Hello Home</h1>} />
                <Route path='/new-post' exact render={()=> <h1>Hello New Post</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    {/* <Route render={() => <h1>Not Found</h1>}/> */}
                    <Redirect from='/' to='/posts' />
                </Switch>
            </div>
        );
    }
}
// in case if switch order of Routes it is important, first route that matches the given path loads
// whenever have /something load FullPost component
export default Blog;