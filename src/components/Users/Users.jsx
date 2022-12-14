import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

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