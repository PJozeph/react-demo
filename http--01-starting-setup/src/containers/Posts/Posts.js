import React, { Component } from 'react'
import axios from '../../axios'
import Post from '../../components/Post/Post'
import { Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import {Route} from 'react-router-dom';
import './Post.css'



class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    postSelectedHandler = (id) => {
        this.props.history.push({ pathname: '/' + id })
    };

    componentDidMount() {
        // app does not wait for this method to finish 
        const posts = axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPots = posts.map(post => {
                    return {
                        ...post,
                        author: 'Pallagi'
                    }
                });
                this.setState({ posts: updatedPots });
            }).catch(error => {
                // this.setState({error: true});
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} > 
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    //</Link>
                )
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + ':id' } exact component={FullPost} />
            </div>
        );
    }
}
export default Posts;
