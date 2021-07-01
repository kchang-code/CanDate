import React from 'react';
import Chat from './Chat';
import './Message.scss';

const Message = () => {
  return (
    <div className="container">
      <section className="message">
        <Chat
          name="Zio"
          message="Hello! I like you!"
          timestamp="just now"
          profilePic="https://img.cinemablend.com/filter:scale/quill/2/5/7/3/b/2/2573b2c3b5ebe45b398fcb9c10538e6c10a5c60b.jpg?mw=600"
        />

        <Chat
          name="Matt"
          message="Hello! I don't like you!"
          timestamp="5 mins ago"
          profilePic="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
        />

        <Chat
          name="Khea"
          message="Hello! I don't like you!"
          timestamp="10 mins ago"
          profilePic="https://www.nme.com/wp-content/uploads/2021/06/scarlett-johansson-black-widow-iron-man-2-696x442.jpg"
        />
      </section>

      <section>Chart Screen</section>
    </div>
  );
};

export default Message;
