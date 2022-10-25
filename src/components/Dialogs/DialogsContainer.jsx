import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/store'
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        let onAddMessage = () => {
          store.dispatch(addMessageActionCreator());
        }

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        }

        return <Dialogs updateNewMessageText={onMessageChange}
          addMessage={onAddMessage}
          dialogsPage={state.dialogsPage}
          newMessageText={state.dialogsPage.newMessageText} />
      }
    }
  </StoreContext.Consumer>
}

export default DialogsContainer;
