import React from 'react';
import cl from './Profile.module.css'

function Profile() {
    return(
        <div className={cl.content}>
            <div className={cl.ava}>
                <img src='https://i.yapx.ru/Ra8I0.jpg'></img>
            </div>
            <div className={cl.posts}>
                <div className={cl.post}>Post 1</div>
            </div>
        </div>
    );
}

export default Profile;