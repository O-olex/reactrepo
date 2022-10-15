import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map ( 
    d => <DialogItem name={d.name} id={d.id} />
  );

  let messagesElements = props.messagesData.map (
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
