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
import {
  getFavoriteByUser,
  getUserBlockMe,
} from '../helpers/favoriteBlockHelp';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

let to_user_id = null;
let userName;
let userPhoto;
let userAboutMe;

//configure alert component
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ChatScreen = (props) => {
  const classes = useStyles(); //configure block alert style
  const {
    selectedMessages,
    messages,
    setMessages,
    selectedPhoto,
    users,
    block,
    loading,
  } = props;

  let { id } = useParams();
  const [input, setInput] = useState('');
  const [showMsg, setShowMsg] = useState([]);
  const [filteredBlock, setFilteredBlock] = useState([]);
  useEffect(() => {
    if (block.length !== 0) {
      setFilteredBlock(getUserBlockMe(block, id));
    }
  }, [loading]);

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
    setShowMsg(selectedMessages);
  }, [selectedMessages]);

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
        const assignedId = messages.length + 1;
        console.log('newMessage', {
          ...newMessage,
          id: assignedId,
          creates_on: time,
        });
        console.log('res.data', res.data);
        // setMessages([...messages, { ...newMessage, creates_on: time }]);

        // setMessages([...messages, ...res.data]);
      })
      .catch((err) => {
        console.log('Put error on new messages', err);
      });

    setInput('');
  };

  const sortedShowMsg = showMsg.sort((a, b) => a.id - b.id);

  const messageContent = sortedShowMsg.map((message) => {
    if (message['from_user_id'] !== Number(id)) {
      to_user_id = message['from_user_id'];
      userName = users[to_user_id - 1]['first_name'];
      userPhoto = users[to_user_id - 1]['profile_photo'];
      userAboutMe = users[to_user_id - 1]['address'];

      return (
        <div className="chatScreen_message">
          <Avatar
            key={message.id}
            className="chatScreen_image"
            alt={message.name}
            src={selectedPhoto}
          />
          <p className="chatScreen_text">
            {message.content}

            <span className="chat_time">{message['creates_on']}</span>
          </p>
        </div>
      );
    } else {
      to_user_id = message['to_user_id'];
      userName = users[to_user_id - 1]['first_name'];
      userPhoto = users[to_user_id - 1]['profile_photo'];
      userAboutMe = users[to_user_id - 1]['address'];
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
          <p>{userAboutMe}</p>
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

        {filteredBlock.includes(Number(to_user_id)) && (
          <Alert severity="warning">Sorry, You are blocked by this user.</Alert>
        )}
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
