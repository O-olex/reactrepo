import React from 'react';
import cl from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {

    let postsElements = props.posts.map (
        m => <Post message={m.message} likesCount={m.likesCount} />
    );

    return (
        <div className={cl.posts}>
            <div className={cl.newpost}>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
               { postsElements }
        </div>
    );
}

export default Posts;