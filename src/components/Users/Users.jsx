import React from 'react';
import c from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      props.setUsers(response.data.items);
    });
  };

  return (
    <div className={c.usersMain}>
      {
        props.users.map(u => <div className={c.userDIV} key={u.id}>
          <div className={c.leftDIV}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto}></img><br />
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
          <div className={c.rightDIV}>
            <div className={c.name_status}><p>{u.name}</p><p>{u.status}</p></div>
            <div>{"u.location.country"} <br /> {"u.location.city"}</div>
          </div>
        </div>)
      }
    </div>
  );
}

export default Users;
