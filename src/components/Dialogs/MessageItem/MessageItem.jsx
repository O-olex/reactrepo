import React from 'react';
import cl from './MessageItem.module.css';

const MessageItem = (props) => {
  return(
      <div className={cl.message}>
        {props.message}
      </div>
  );
}

export default MessageItem;
