import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.scss';
import ReactTimeAgo from 'react-time-ago';

const SidebarChat = (props) => {
  const {
    to_name,
    message,
    profilePic,
    setSelectedUserId,
    to_user_id,
    sideBarMessage,
  } = props;

  console.log('sideBarMessage', sideBarMessage);
  const dateTimeAgo =
    message['creates_on'].slice(3, 5) +
    '/' +
    message['creates_on'].slice(0, 3) +
    message['creates_on'].slice(5);

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
        <p>{sideBarMessage.content}</p>
      </div>
      <div>
        <ReactTimeAgo date={dateTimeAgo} locale="en-US" />
      </div>
    </div>
  );
};

export default SidebarChat;
