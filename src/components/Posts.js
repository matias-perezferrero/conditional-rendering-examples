import React, { Component } from 'react'
import Post from './Post'
import data from '../data.json'

export default class Posts extends Component {
    constructor() {
        super()

        this.state = {
            posts: data
        }
    }

    render() {
        let mappedPosts = this.state.posts.map(post => <Post message={post.message}/>)

        return (
            <div>
                <h1>Posts</h1>
                {mappedPosts}
            </div>
        )
    }
}
