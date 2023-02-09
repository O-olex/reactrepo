import React from 'react';
import cl from './Posts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../../utils/Validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const Posts = (props) => {

    let postsElements = props.posts.map(
        m => <Post message={m.message} deletePost={props.deletePost} id={m.id} likesCount={m.likesCount} />
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
            <Field component={Textarea} placeholder="Enter message" name="newPost" validate={[required, maxLength10]} />
            <button>Add post</button>
        </form>
    );
}

const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm);

export default Posts;