import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state'

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map ( 
    d => <DialogItem name={d.name} id={d.id} />
  );

  let messagesElements = props.dialogsPage.messagesData.map (
    m => <MessageItem message={m.message} />
  );

  let newMessageElement = React.createRef();

  let addMessage = () =>{
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = () =>{
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsContainer}>
        { dialogsElements }
      </div>
      <div className={cl.MessagesContainer}>
        { messagesElements }
        <textarea onChange={ onMessageChange } 
        ref={ newMessageElement }
        value={ props.dialogsPage.newMessageText } />
        <button onClick={ addMessage }>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;
