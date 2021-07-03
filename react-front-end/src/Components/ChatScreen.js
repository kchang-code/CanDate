import React, { useEffect, useState } from 'react';
import './ChatScreen.scss';
import { Avatar } from '@material-ui/core';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
let from_user_id = null;

const ChatScreen = (props) => {
  const [input, setInput] = useState('');
  let { id } = useParams();

  const newMessage = {
    to_user_id: Number(id),
    from_user_id: Number(from_user_id),
    content: input,
  };

  const [showMsg, setShowMsg] = useState([]);

  // console.log('selectedMessages in chat', props.selectedMessages);
  // console.log('showMsg in chat', showMsg);
  // // const [selectedMessages, setSelectedMessages] = useState(
  // //   props.selectedMessages
  // // );
  useEffect(() => {
    setShowMsg(props.selectedMessages);
  }, [props.selectedMessages]);

  const handleSend = () => {
    axios.put('http://localhost:8080/api/users/:id/messages', { newMessage });

    props.setMessages([...props.messages, newMessage]);
    console.log('NEW MSG', newMessage);

    setInput('');
  };

  const messageContent = showMsg.map((message) => {
    if (message['from_user_id'] === Number(id)) {
      from_user_id = message['to_user_id'];

      return (
        <div className="chatScreen_message">
          <Avatar
            key={message.id}
            className="chatScreen_image"
            alt={message.name}
            src={message.profilePic}
          />
          <p className="chatScreen_text">{message.content}</p>
        </div>
      );
    } else {
      return (
        <div className="chatScreen_message">
          <p className="chatScreen_textUser">{message.content}</p>
        </div>
      );
    }
  });

  return (
    <div className="box">
      <h2>Chat screen</h2>

      {messageContent}

      <form
        className="chatScreen_input"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={input}
          onChange={(data) => setInput(data.target.value)}
          className="chatScreen_inputField"
          placeholder="Type a message..."
        />
        <button
          onClick={() => {
            handleSend();
          }}
          className="chatScreen_inputButton"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
