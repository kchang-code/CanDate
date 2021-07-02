import React from 'react';
import Chat from './Chat';
import './Message.scss';
import ChatScreen from './ChatScreen';
import { reduceToNames } from '../helpers/messageHelper';

const Message = (props) => {
  const { messages, users } = props;
  const reducedMessage = reduceToNames(messages);

  console.log('message', messages);
  console.log('users', users);
  const reducedMessages = reducedMessage.map((message) => {
    return (
      <Chat
        key={message.id}
        from_name={users[message['from_user_id'] - 1]['first_name']}
        to_name={users[message['to_user_id'] - 1]['first_name']}
        timestamp="just now"
        message={message.content}
        profilePic={users[message['to_user_id'] - 1]['profile_photo']}
      />
    );
  });

  // const Messages = messages.map((message) => {
  //   return (
  //     <ChatScreen
  //       key={message.id}
  //       from_name={users[message['from_user_id'] - 1]['first_name']}
  //       to_name={users[message['to_user_id'] - 1]['first_name']}
  //       message={message.content}
  //       profilePic={users[message['to_user_id'] - 1]['profile_photo']}
  //     />
  //   );
  // });
  return (
    <div className="container">
      <section className="message">{reducedMessages}</section>

      <section className="chat_screen">
        <ChatScreen messages={messages} />
      </section>
    </div>
  );
};

export default Message;
