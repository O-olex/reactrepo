import React from 'react';
import Posts from './Posts'
import { addPostActionCreator, deletePostAC } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        },
        deletePost: (postId) => {
            dispatch(deletePostAC(postId));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;