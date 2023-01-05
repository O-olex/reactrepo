import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map(
    d => <DialogItem name={d.name} id={d.id} />
  );

  let messagesElements = props.dialogsPage.messagesData.map(
    m => <MessageItem message={m.message} />
  );

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }


  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsContainer}>
        {dialogsElements}
      </div>
      <div className={cl.messagesContainer}>
        {messagesElements}
        <textarea onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText} />
        <button onClick={onAddMessage}>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;
