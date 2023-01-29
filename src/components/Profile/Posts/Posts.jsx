import React from 'react';
import cl from './Posts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from "redux-form";

const Posts = (props) => {

    let postsElements = props.posts.map(
        m => <Post message={m.message} likesCount={m.likesCount} />
    );

    const addPost = (values) => {
        props.addPost(values.newPost);
    }

    return (
        <div className={cl.posts}>
            <div className={cl.newpost}>
                <AddPostFormRedux onSubmit={ addPost } />
            </div>
            {postsElements}
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPost" />
            <button>Add post</button>
        </form>
    );
}

const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm);

export default Posts;