import React from 'react';
import Posts from './Posts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store'

const PostsContainer = (props) => {
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <Posts updateNewPostText={onPostChange} 
        addPost={addPost} 
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />
    );
}

export default PostsContainer;