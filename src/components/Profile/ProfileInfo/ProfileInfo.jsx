import React from 'react';
import Preloader from '../../common/Preloader';
import cl from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
            <div className={cl.wall}>
                <div className={cl.ava}>
                    <img src='https://i.yapx.ru/Ra8I0.jpg'></img>
                </div>
                <div className={cl.ava}>
                    <img src={props.profile.photos.large}></img>
                </div>
            </div>
    );
}

export default ProfileInfo;