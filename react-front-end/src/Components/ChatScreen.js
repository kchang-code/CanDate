import React, { useState } from 'react';
import './ChatScreen.scss';
import { Avatar } from '@material-ui/core';

const ChatScreen = (props) => {
  const [input, setInput] = useState();
  const message = props.messages;
  // const [message, setMessage] = useState([
  //   {
  //     id: '1',
  //     name: 'Lana',
  //     message: 'Hello! I like you!',
  //     profilePic:
  //       'https://i1.sndcdn.com/avatars-000323919926-l9fdlc-t500x500.jpg',
  //   },

  //   {
  //     id: '2',
  //     name: 'Lana',
  //     message: 'Your coding skill is amazing!',
  //     profilePic:
  //       'https://i1.sndcdn.com/avatars-000323919926-l9fdlc-t500x500.jpg',
  //   },

  //   {
  //     id: '3',
  //     message: "Let's hangout tonight",
  //     profilePic:
  //       'https://img.cinemablend.com/filter:scale/quill/2/5/7/3/b/2/2573b2c3b5ebe45b398fcb9c10538e6c10a5c60b.jpg?mw=600',
  //   },
  // ]);

  // const handleSend = (event) => {
  //   event.preventDefault();
  //   setMessage([...message, { message: input }]);
  //   setInput('');
  // };

  const cookie = 'matt';
  return (
    <div>
      <h2>Chat screen</h2>
      {/* {message.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              key={message.id}
              className="chatScreen_image"
              alt={message.name}
              src={message.profilePic}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )} */}

      {message.map((message) =>
        cookie === 'matt' ? (
          <div className="chatScreen_message">
            <Avatar
              key={message.id}
              className="chatScreen_image"
              alt={message.name}
              src={message.profilePic}
            />
            <p className="chatScreen_text">{message.content}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(data) => setInput(data.target.value)}
          className="chatScreen_inputField"
          placeholder="Type a message..."
        />
        <button
          // onClick={handleSend}
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
