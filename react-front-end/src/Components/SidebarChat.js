import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.scss';

const SidebarChat = (props) => {
  // console.log('----------------', props);
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
      className="sidebarChat"
      onClick={() => {
        setSelectedUserId(to_user_id);
      }}
    >
      <Avatar alt="Zio" src={profilePic} />
      <div className="sidebarChat_info">
        <h2>{to_name}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
