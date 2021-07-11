import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.scss';
import ReactTimeAgo from 'react-time-ago';
import { justYouAndMe } from '../helpers/messageHelper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const SidebarChat = (props) => {
  const {
    to_name,
    message,
    profilePic,
    setSelectedUserId,
    to_user_id,
    messageObj,
    filteredFavorite,
    id,
    selectedUserId,
  } = props;

  const [unread, setUnread] = useState(false);
  const [clickTime, setClickTime] = useState('09/07/2020, 21:45:49');
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

  useEffect(() => {
    let messageTime = new Date(latestMsg.creates_on);
    let time = messageTime.toLocaleString('en-GB');
    const rightnow = new Date(clickTime);
    let ClickRightnow = rightnow.toLocaleString('en-GB');
    const d1 = Date.parse(ClickRightnow);
    const d2 = Date.parse(time);
    // setClickTime('09/07/2022, 21:45:49');

    if (
      d1 < d2 &&
      Number(id) === latestMsg['to_user_id'] &&
      selectedUserId !== latestMsg['from_user_id']
      // ||      (!clickTime && setSelectedUserId !== latestMsg['from_user_id'])
    ) {
      setUnread(true);
    }
  }, []);

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
        setClickTime(Date.now());
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
        {unread && <MarkunreadIcon />}
        {filteredFavorite.includes(to_user_id) && (
          <FavoriteIcon
            style={{
              marginBottom: '10px',
              color: 'red',
            }}
          />
        )}
        <ReactTimeAgo date={dateTimeAgo} locale="en-US" />
      </div>
    </div>
  );
};

export default SidebarChat;
