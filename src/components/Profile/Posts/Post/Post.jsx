import React from 'react';
import cl from './Post.module.css'
import userPhoto from '../../../../assets/images/user.png';

const Post = (props) => {

    // const image = props.profile.photos.small

    const deletePost = () => {

        const  postId = props.id;
        props.deletePost(postId);
    }

    return (
        
        <div className={cl.post}>
            <div className={cl.postImg}>
            {/* <img src={image != null ? image : userPhoto}/> */}
            
                {props.message}
            </div>
            <button className={cl.del} onClick={deletePost}>Delete</button>
        </div>
    );
}

export default Post;