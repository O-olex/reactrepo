import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} savePhoto={props.savePhoto} isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} />
            {props.isOwner && <PostsContainer />}
        </div>
    );
}

export default Profile;