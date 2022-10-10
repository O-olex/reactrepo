import React from 'react';
import cl from './Profile.module.css'
import Posts from "./Posts/Posts"

function Profile() {
    return (
        <div className={cl.content}>
            <div className={cl.wall}>
                <div className={cl.ava}>
                    <img src='https://i.yapx.ru/Ra8I0.jpg'></img>
                </div>
            </div>
            <Posts/>
        </div>
    );
}

export default Profile;