import React from 'react';
import cl from './Dialogs.module.css';

function Dialogs() {
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsContainer}>
        <div className={cl.dialog}>
          Artem
        </div>
        <div className={cl.dialog}>
          Dima
        </div>
        <div className={cl.dialog}>
          Maxim
        </div>
      </div>
      <div className={cl.MessagesContainer}>
        <div className={cl.message}>
          Hi
        </div>
        <div className={cl.message}>
          How are you?
        </div>
        <div className={cl.message}>
          I am fine
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
