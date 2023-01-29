import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map(
    d => <DialogItem name={d.name} id={d.id} />
  );

  let messagesElements = props.dialogsPage.messagesData.map(
    m => <MessageItem message={m.message} />
  );

  const addNewMesssage = (values) => {
    props.addMessage(values.newMessage);
  }


  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsContainer}>
        {dialogsElements}
      </div>
      <div className={cl.messagesContainer}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMesssage}/>
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newMessage" />
      <button>Send</button>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
