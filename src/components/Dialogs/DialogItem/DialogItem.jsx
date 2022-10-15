import React from 'react';
import cl from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/Dialogs/" + props.id;
  return(
      <div className={cl.dialog}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  );
}

export default DialogItem;
