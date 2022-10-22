import React from 'react';
import cl from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {

    let postsElements = props.posts.map (
        m => <Post message={m.message} likesCount={m.likesCount} />
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={cl.posts}>
            <div className={cl.newpost}>
                <div><textarea ref={ newPostElement } 
                value={ props.newPostText }
                onChange={ onPostChange } /></div>
                <div><button onClick={ onAddPost }>Add post</button></div>
            </div>
               { postsElements }
        </div>
    );
}

export default Posts;