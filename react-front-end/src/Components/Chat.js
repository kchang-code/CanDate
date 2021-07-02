import React from 'react';
import { Avatar } from '@material-ui/core';
import './Chat.scss';

const Chat = (props) => {
  const { to_name, message, profilePic, timestamp } = props;
  console.log(to_name);
  return (
    <div
      className="chat"
      onClick={() => {
        console.log('clicked');
      }}
    >
      <Avatar className="chat__image" alt="Zio" src={profilePic} />

      <div className="chat_details">
        <h2>{to_name}</h2>
        <p>{message}</p>
      </div>
      <p>{timestamp}</p>
    </div>
  );
};

export default Chat;
