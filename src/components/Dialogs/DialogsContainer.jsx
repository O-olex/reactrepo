import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/store'

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let onAddMessage = () =>{
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (text) =>{
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <Dialogs updateNewMessageText={onMessageChange} 
    addMessage={onAddMessage} 
    dialogsPage={state.dialogsPage}
    newMessageText={state.dialogsPage.newMessageText} />
  );
}

export default DialogsContainer;
