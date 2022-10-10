import React from 'react';
import cl from './Posts.module.css'
import Post from './Post/Post'

function Posts() {
    return (
        <div className={cl.posts}>
            <div className={cl.newpost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
                <Post message='First post' likesCount='5' />
        </div>
    );
}

export default Posts;