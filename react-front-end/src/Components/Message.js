import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import './Message.scss';
import ChatScreen from './ChatScreen';
import {
  filteredMessageByLoginUser,
  filteredMessageBySelectedUser,
  reduceToNames,
} from '../helpers/messageHelper';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Message = (props) => {
  let { id } = useParams();
  const { messages, users, setMessages } = props;

  const userAllMessages = filteredMessageByLoginUser(messages, id);
  const reducedMessage = reduceToNames(userAllMessages, id);
  const [selectedUserId, setSelectedUserId] = useState(null);
  // const [selectedUserMessages, setSelectedUserMessages] = useState([]);

  // useEffect(() => {
  //   setSelectedUserMessages(
  //     filteredMessageBySelectedUser(userAllMessages, selectedUserId)
  //   );
  // }, [messages]);
  const selectedUserMessages = filteredMessageBySelectedUser(
    userAllMessages,
    selectedUserId
  );

  // console.log('selectedUserMessages', selectedUserMessages);
  console.log('MSGGGGGGGGGG', messages);
  console.log('USERMSG', userAllMessages);

  const reducedMessagesComp = reducedMessage.map((message) => {
    return (
      <Chat
        key={message.id}
        to_user_id={message['to_user_id']}
        from_name={users[message['from_user_id'] - 1]['first_name']}
        to_name={users[message['to_user_id'] - 1]['first_name']}
        timestamp="just now"
        message={message.content}
        profilePic={users[message['to_user_id'] - 1]['profile_photo']}
        setSelectedUserId={setSelectedUserId}
      />
    );
  });

  return (
    <div className="container">
      <section className="message">{reducedMessagesComp}</section>

      <section className="chat_screen">
        <ChatScreen
          selectedMessages={selectedUserMessages}
          messages={messages}
          setMessages={setMessages}
        />
      </section>
    </div>
  );
};

export default Message;
