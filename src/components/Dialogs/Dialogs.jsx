import React from 'react';
import cl from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/Dialogs/" + props.id;
  return(
      <div className={cl.dialog}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  );
}

const MessageItem = (props) => {
  let path = "/Message/" + props.id;
  return(
      <div className={cl.message}>
        {props.message}
      </div>
  );
}

const Dialogs = () => {

  let Dialogs = [
    {id:1, name:'Mike'},
    {id:2, name:'Sandy'},
    {id:3, name:'Max'}
  ];

  let dialogsElements = Dialogs.map ( 
    d => <DialogItem name={d.name} id={d.id} />
  );

  let Messages = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you?'},
    {id:3, message:'I am fine'}
  ];

  let messagesElements = Messages.map (
    m => <MessageItem message={m.message} />
  );

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsContainer}>
        { dialogsElements }
      </div>
      <div className={cl.MessagesContainer}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;
