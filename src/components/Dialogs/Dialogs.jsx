import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/Validators/validators';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map(
    d => <DialogItem name={d.name} key={d.id} id={d.id} />
  );

  let messagesElements = props.dialogsPage.messagesData.map(
    m => <MessageItem message={m.message} key={m.id} />
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

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form className={cl.dialogForm} onSubmit={props.handleSubmit}>
      <Field component={Textarea} placeholder="Enter message" validate={[required, maxLength50]} name="newMessage" />
      <button>Send</button>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
