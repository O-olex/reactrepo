import React from 'react';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';
import cl from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
debugger
    return (
            <div className={cl.wall}>
                <div className={cl.ava}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}></img>
                </div>
                <div>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
    );
}

export default ProfileInfo;