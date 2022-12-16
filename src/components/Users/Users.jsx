import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= 20; i++) {
    pages.push(i);
  }



  return (
    <div className={c.usersMain}>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p ? c.selectedPage : undefined}
            onClick={() => { props.onPageChanged(p) }}>{p}</span>
        })}
      </div>
      {
        props.users.map(u => <div className={c.userDIV} key={u.id}>
          <div className={c.leftDIV}>
            <NavLink to={'/Profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto}></img><br />
            </NavLink>
            {u.followed
              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.toggleFollowingProgress(true, u.id);
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                {withCredentials: true, headers: {'API-KEY': '9daa298a-5ad3-427c-a0ee-6f75e625c238'}}).then(response => {
                  if(response.data.resultCode == 0){
                    props.unfollow(u.id);
                  }
                  props.toggleFollowingProgress(false, u.id);
                });
                

              }}>Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.toggleFollowingProgress(true, u.id);
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                {withCredentials: true, headers: {'API-KEY': '9daa298a-5ad3-427c-a0ee-6f75e625c238'}}).then(response => {
                  if(response.data.resultCode == 0){
                    props.follow(u.id);
                  }
                  props.toggleFollowingProgress(false, u.id);
                });

              }}>Follow</button>}
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