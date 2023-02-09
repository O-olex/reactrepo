import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';


const User = (props) => {

  return (
      
      
        <div className={c.userDIV}>
          <div className={c.leftDIV}>
            <NavLink to={'/Profile/' + props.user.id}>
              <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}></img><br />
            </NavLink>
            {props.user.followed
              ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {

                props.unfollow(props.user.id);

              }}>Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {

                props.follow(props.user.id);

              }}>Follow</button>}
          </div>
          <div className={c.rightDIV}>
            <div className={c.name_status}><p>{props.user.name}</p><p>{props.user.status}</p></div>
          </div>
        </div>
      
    
  );
}

export default User;