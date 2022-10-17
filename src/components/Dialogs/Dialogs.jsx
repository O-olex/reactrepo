import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map ( 
    d => <DialogItem name={d.name} id={d.id} />
  );

  let messagesElements = props.state.messagesData.map (
    m => <MessageItem message={m.message} />
  );

  let newMessageElement = React.createRef();

  let addMessage = () =>{
    let text = newMessageElement.current.value;
    alert(text);
  }
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsContainer}>
        { dialogsElements }
      </div>
      <div className={cl.MessagesContainer}>
        { messagesElements }
        <textarea ref={ newMessageElement }></textarea>
        <button onClick={ addMessage }>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;
