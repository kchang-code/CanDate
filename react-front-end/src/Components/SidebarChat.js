import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.scss';
import ReactTimeAgo from 'react-time-ago';
import {
  filteredMessageBySelectedUser,
  justYouAndMe,
  reduceToNamesIncludingMe,
} from '../helpers/messageHelper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MarkunreadIcon from '@material-ui/icons/Markunread';

const SidebarChat = (props) => {
  const {
    to_name,
    message,
    profilePic,
    setSelectedUserId,
    to_user_id,
    sideBarMessage,
    messageObj,
    filteredFavorite,
    unread,
    setUnread,
  } = props;

  const twoMessageArr = [
    ...messageObj[message['to_user_id']],
    ...messageObj[message['from_user_id']],
  ];
  const filteredMsg = justYouAndMe(
    twoMessageArr,
    message['to_user_id'],
    message['from_user_id']
  );

  const latestMsg = filteredMsg.sort((a, b) => b.id - a.id)[0];

  const dateTimeAgo =
    latestMsg['creates_on'].slice(3, 5) +
    '/' +
    latestMsg['creates_on'].slice(0, 3) +
    latestMsg['creates_on'].slice(5);

  return (
    <div
      className="sidebarChat"
      onClick={() => {
        setSelectedUserId(to_user_id);
        setUnread(false);
      }}
    >
      <Avatar alt="Zio" src={profilePic} />
      <div className="sidebarChat_info">
        <h2>{to_name}</h2>

        <p>{latestMsg.content}</p>
      </div>
      <div
        className="SidebarChat_right"
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'end',
          alignItems: 'flex-end',
          marginBottom: '10px',
        }}
      >
        {/* {unread && <MarkunreadIcon />} */}
        {filteredFavorite.includes(to_user_id) && (
          <FavoriteIcon
            style={{
              marginBottom: '10px',
            }}
          />
        )}
        <ReactTimeAgo date={dateTimeAgo} locale="en-US" />
      </div>
    </div>
  );
};

export default SidebarChat;
