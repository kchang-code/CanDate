import React, { useEffect, useState } from 'react';
import './ChatScreen.scss';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import { Avatar, IconButton } from '@material-ui/core';
import './Chat.scss';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';

let to_user_id = null;

const ChatScreen = (props) => {
  const [input, setInput] = useState('');
  let { id } = useParams();
  const [showMsg, setShowMsg] = useState([]);
  const [showTime, setShowTime] = useState('');

  const newMessage = {
    from_user_id: Number(id),
    to_user_id: Number(to_user_id),
    content: input,
    creates_on: showTime,
  };

  useEffect(() => {
    setShowMsg(props.selectedMessages);
  }, [props.selectedMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    const timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    let time = today.toUTCString().slice(5, today.toUTCString().length - 4);
    console.log('object', time);
    setShowTime(time);
    console.log('after set time');
    console.log('showtime', showTime);

    axios
      .put('http://localhost:8080/api/users/:id/messages', { newMessage })
      .then(() => {
        console.log('Put is done');
        props.setMessages([...props.messages, newMessage]);
      })
      .catch((err) => {
        console.log('hererererere', err);
      });

    // console.log('newMessage-------------', newMessage);
    // console.log('showTime11111', showTime);
    // console.log(
    //   'now',
    //   today.toUTCString().slice(5, today.toUTCString().length - 4)
    // );

    setInput('');
  };

  const messageContent = showMsg.map((message) => {
    if (message['from_user_id'] !== Number(id)) {
      to_user_id = message['from_user_id'];

      return (
        <div className="chatScreen_message">
          <Avatar
            key={message.id}
            className="chatScreen_image"
            alt={message.name}
            src={props.selectedPhoto}
          />
          <p className="chatScreen_text">
            {message.content}

            <span className="chat_time">{message['creates_on']}</span>
          </p>
        </div>
      );
    } else {
      return (
        <div className="chatScreen_message">
          <p className="chatScreen_textUser">
            {message.content}
            <span className="chat_time">{message['creates_on']}</span>
          </p>
        </div>
      );
    }
  });

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>ROOM NAME</h3>
          <p>LAST SEEN at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">{messageContent}</div>

      <div className="chat_footer">
        <InsertEmoticonOutlinedIcon />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(data) => setInput(data.target.value)}
          />
          <button onClick={(e) => sendMessage(e)} type="submit">
            Send a message
          </button>
        </form>
        <MicNoneOutlinedIcon />
      </div>
    </div>
  );
};

export default ChatScreen;
