import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId : null,
        error : false
    }

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
                this.setState({
                    posts: updatedPots
                });
            }).catch(error => {
                this.setState({
                    error: true
                });
            });
    }

    postSelectedHandler =(id)=> {
        this.setState({
            selectedPostId : id
        })
    };


    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={()=> this.postSelectedHandler(post.id)} />
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} posts={this.state.posts} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;