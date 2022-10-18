import React from 'react';
import cl from './Profile.module.css'
import Posts from "./Posts/Posts"
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts addPost={props.addPost} 
            newPostText={ props.profilePage.newPostText } 
            posts={props.profilePage.posts}
            updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile;