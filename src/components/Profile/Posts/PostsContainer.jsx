import React from 'react';
import Posts from './Posts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store'
import StoreContext from '../../../StoreContext';

const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }

                    return <Posts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />
                }
            }
        </StoreContext.Consumer>
    );
}

export default PostsContainer;