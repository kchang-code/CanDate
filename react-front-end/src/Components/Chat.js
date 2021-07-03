import React from 'react';
import { Avatar } from '@material-ui/core';
import './Chat.scss';

const Chat = (props) => {
  const {
    to_name,
    message,
    profilePic,
    timestamp,
    setSelectedUserId,
    to_user_id,
  } = props;

  return (
    <div
      className="chat"
      onClick={() => {
        setSelectedUserId(to_user_id);
        // console.log('user_id', to_user_id);
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
