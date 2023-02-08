import React from 'react';
import Preloader from '../../common/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';
import cl from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
            <div className={cl.wall}>
                <div className={cl.ava}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}></img>
                </div>
                <div>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
    );
}

export default ProfileInfo;