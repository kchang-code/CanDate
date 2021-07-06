import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import './Message.scss';
import ChatScreen from './ChatScreen';
import {
  filteredMessageByLoginUser,
  filteredMessageBySelectedUser,
  reduceToNames,
  // reduceToNames,
} from '../helpers/messageHelper';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Message = (props) => {
  let { id } = useParams();
  const { messages, users, setMessages, loading, favorite } = props;

  const userAllMessages = filteredMessageByLoginUser(messages, id);
  const reducedMessage = reduceToNames(userAllMessages, id);

  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    reducedMessage.length !== 0 &&
      setSelectedUserId(reducedMessage[0]['to_user_id']);
  }, [loading]);

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
          loading={loading}
          selectedUserMessages={selectedUserMessages}
          selectedUserId={selectedUserId}
          favorite={favorite}
        />
        <ChatScreen
          selectedMessages={selectedUserMessages}
          messages={messages}
          setMessages={setMessages}
          selectedPhoto={selectedPhoto}
          users={users}
        />
      </div>
    </div>
  );
};

export default Message;
