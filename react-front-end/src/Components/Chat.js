import React from 'react';
import { Avatar } from '@material-ui/core';
import './Chat.scss';

const Chat = (props) => {
  const { name, message, profilePic, timestamp } = props;
  return (
    <div className="chat">
      <Avatar className="chat__image" alt="Zio" src={profilePic} />

      <div className="chat_details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p>{timestamp}</p>
    </div>
  );
};

export default Chat;
