import React from 'react';
import cl from './Sidebar.module.css'

function Sidebar() {
  return (
    <div className={cl.sidebar}>
      <div className={cl.item}>My profile</div>
      <div className={cl.item}>News</div>
      <div className={cl.item}>Messages</div>
      <div className={cl.item}>Music</div>
      <br></br>
      <div className={cl.item}>Settings</div>
    </div>
  );
}

export default Sidebar;