import React from 'react';
import cl from './Posts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'

const Posts = (props) => {

    let postsElements = props.posts.map (
        m => <Post message={m.message} likesCount={m.likesCount} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
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