import React from 'react';
import cl from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {

    let postsElements = props.posts.map (
        m => <Post message={m.message} likesCount={m.likesCount} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    }

    return (
        <div className={cl.posts}>
            <div className={cl.newpost}>
                <div><textarea ref={ newPostElement } 
                value={ props.newPostText }
                onChange={ onPostChange } /></div>
                <div><button onClick={ addPost }>Add post</button></div>
            </div>
               { postsElements }
        </div>
    );
}

export default Posts;