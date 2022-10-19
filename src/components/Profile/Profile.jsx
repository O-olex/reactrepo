import React from 'react';
import cl from './Profile.module.css'
import Posts from "./Posts/Posts"
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts newPostText={ props.profilePage.newPostText } 
            posts={props.profilePage.posts}
            dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;