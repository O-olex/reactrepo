import React from 'react';
import cl from './Post.module.css'

const Post = (props) => {

    const deletePost = () => {

        const  postId = props.id;
        props.deletePost(postId);
    }

    return (
        <div className={cl.post}>
            <div>
                <img src="https://i.yapx.ru/Ra8I0.jpg"/>
                {props.message}
            </div>
            <div>{props.likesCount} <span>likes</span></div>
            <button className={cl.del} onClick={deletePost}>Delete</button>
        </div>
    );
}

export default Post;