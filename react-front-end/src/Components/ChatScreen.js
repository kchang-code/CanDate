import React, { useEffect, useState, useRef } from 'react';
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
import ReactTimeAgo from 'react-time-ago';

let to_user_id = null;
let userName;
let userPhoto;

const ChatScreen = (props) => {
  let { id } = useParams();
  const [input, setInput] = useState('');
  const [showMsg, setShowMsg] = useState([]);

  const newMessage = {
    from_user_id: Number(id),
    to_user_id: Number(to_user_id),
    content: input,
  };

  const messageEl = useRef(null);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, []);

  useEffect(() => {
    setShowMsg(props.selectedMessages);
  }, [props.selectedMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    const timeElapsed = Date.now();
    //sending msg state
    let today = new Date(timeElapsed);

    let time = today.toLocaleString();

    axios
      .put('http://localhost:8080/api/users/:id/messages', {
        newMessage: { ...newMessage, creates_on: time },
      })
      .then((res) => {
        props.setMessages([...props.messages, ...res.data]);
      })
      .catch((err) => {});

    setInput('');
  };

  const messageContent = showMsg.map((message) => {
    if (message['from_user_id'] !== Number(id)) {
      to_user_id = message['from_user_id'];
      userName = props.users[to_user_id - 1]['first_name'];
      userPhoto = props.users[to_user_id - 1]['profile_photo'];
      // setUserInfo({ ...userInfo, userName, userPhoto });
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
        <Avatar src={userPhoto} />
        <div className="chat_headerInfo">
          <h3>{userName}</h3>
          <p>
            Last Seen: <ReactTimeAgo date={Date.now()} locale="en-US" />
          </p>
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

      <div className="chat_body" ref={messageEl}>
        {messageContent}
      </div>

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
