import React from 'react';
import cl from './Posts.module.css'
import Post from './Post/Post'

function Posts() {

    let posts = [
        {id:1, message:'First post', likesCount:5},
        {id:2, message:'The weather is good!', likesCount:2}
      ];

    let postsElements = posts.map (
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