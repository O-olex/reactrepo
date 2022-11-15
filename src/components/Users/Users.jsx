import React from 'react';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import c from './Users.module.css';

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1, profileIMG: 'https://abrakadabra.fun/uploads/posts/2022-01/1642749236_1-abrakadabra-fun-p-avatarka-dlya-instagrama-3.jpg',
        followed: true, fullName: 'Masha', status: 'I like rock', location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: 2, profileIMG: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg',
        followed: true, fullName: 'Jack', status: 'Playing footbal', location: { city: 'New York', country: 'USA' }
      },
      {
        id: 3, profileIMG: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
        followed: false, fullName: 'Janek', status: 'Cats are the best!', location: { city: 'Brno', country: 'Czech Republic' }
      },
      {
        id: 4, profileIMG: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg',
        followed: false, fullName: 'Jindro', status: '', location: { city: 'Prague', country: 'Czech Republic' }
      }
    ])
  };

  return (
    <div className={c.usersMain}>
      {
        props.users.map(u => <div className={c.userDIV} key={u.id}>
          <div className={c.leftDIV}>
            <img src={u.profileIMG}></img><br />
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
          <div className={c.rightDIV}>
            <div className={c.name_status}><p>{u.fullName}</p><p>{u.status}</p></div>
            <div>{u.location.country} <br /> {u.location.city}</div>
          </div>
        </div>)
      }
    </div>
  );
}

export default Users;
