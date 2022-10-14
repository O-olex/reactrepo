import React from 'react';
import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
            <div className={cl.wall}>
                <div className={cl.ava}>
                    <img src='https://i.yapx.ru/Ra8I0.jpg'></img>
                </div>
            </div>
    );
}

export default ProfileInfo;