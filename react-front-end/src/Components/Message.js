import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import './Message.scss';
import ChatScreen from './ChatScreen';
import {
  filteredMessageByLoginUser,
  filteredMessageBySelectedUser,
  // reduceToNames,
} from '../helpers/messageHelper';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Message = (props) => {
  let { id } = useParams();
  const { messages, users, setMessages } = props;
  const userAllMessages = filteredMessageByLoginUser(messages, id);
  // const reducedMessage = reduceToNames(userAllMessages, id);

  // const firstChatId = reducedMessage
  //   ? reducedMessage[0]['from_user_id'] !== Number(id)
  //     ? reducedMessage[0]['from_user_id']
  //     : reducedMessage[0]['to_user_id']
  //   : null;

  // let firstChatId = null;

  // if (reducedMessage.length !== 0) {
  //   if (reducedMessage[0]['from_user_id'] !== Number(id)) {
  //     firstChatId = reducedMessage[0]['from_user_id'];
  //   } else {
  //     firstChatId = reducedMessage[0]['to_user_id'];
  //   }
  // }

  // useEffect(() => {
  //   if (reducedMessage.length !== 0) {
  //     if (reducedMessage[0]['from_user_id'] !== Number(id)) {
  //       setSelectedUserId(reducedMessage[0]['from_user_id']);
  //     } else {
  //       setSelectedUserId(reducedMessage[0]['to_user_id']);
  //     }
  //   }
  // }, []);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const selectedUserMessages = filteredMessageBySelectedUser(
    userAllMessages,
    selectedUserId
  );

  const selectedPhoto = selectedUserId
    ? users[selectedUserId - 1]['profile_photo']
    : null;

  return (
    <div className="app">
      <div className="app_body">
        <Chat
          messages={messages}
          users={users}
          setMessages={setMessages}
          setSelectedUserId={setSelectedUserId}
        />
        <ChatScreen
          selectedMessages={selectedUserMessages}
          messages={messages}
          setMessages={setMessages}
          selectedPhoto={selectedPhoto}
        />
      </div>
    </div>
  );
};

export default Message;
