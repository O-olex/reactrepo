import React from 'react';
import cl from './Profile.module.css'
import Posts from "./Posts/Posts"
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
    return (
        <div>
            <ProfileInfo />
            <Posts/>
        </div>
    );
}

export default Profile;