import React from 'react';
import cl from './Post.module.css'

function Post(props) {
    return (
        <div className={cl.post}>
            <div><img src="https://i.yapx.ru/Ra8I0.jpg"/></div>
            {props.message}
            <div>{props.likesCount} <span>like</span></div>
        </div>
    );
}

export default Post;