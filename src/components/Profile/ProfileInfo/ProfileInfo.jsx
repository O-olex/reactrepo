import React from 'react';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';
import cl from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
            <div className={cl.wall}>
                <div className={cl.ava}>
                    <img src={props.profile.photos.large}></img>
                </div>
                <ProfileStatus status={props.profile.aboutMe}/>
            </div>
    );
}

export default ProfileInfo;