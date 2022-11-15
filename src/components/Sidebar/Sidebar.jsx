import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={cl.sidebar}>
      <div className={cl.item}>
        <NavLink to='/Profile' className={({ isActive }) =>
            (isActive ? cl.activeLink : "no")}>My profile</NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to='/News' className={({ isActive }) =>
            (isActive ? cl.activeLink : "no")}>News</NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to='/Dialogs' className={({ isActive }) =>
            (isActive ? cl.activeLink : "no")}>Messages</NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to='/Music'className={({ isActive }) =>
            (isActive ? cl.activeLink : "no")}>Music</NavLink>
      </div>
      <br></br>
      <div className={cl.item}>
        <NavLink to='/Users' className={({ isActive }) =>
            (isActive ? cl.activeLink : "no")}>Find users</NavLink>
      </div>
      <br></br>
      <div className={cl.item}>
        <NavLink to='/Settings' className={({ isActive }) =>
            (isActive ? cl.activeLink : "no")}>Settings</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;