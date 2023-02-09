import React from 'react';
import c from './Users.module.css';
import Paginator from './Paginator';
import User from './User';


const Users = (props) => {

  return (
    <div className={c.usersMain}>
      <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
      {
        props.users.map(u => <User user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} key={u.id}/>)
      }
    </div>
  );
}

export default Users;