import React, { useState } from 'react';
import PhotoList from './PhotoList';
import './Home.scss';

export default function Home(props) {

  return (
    <div className="home-container">
      <div className="image-wall">
        <PhotoList image={props.image} />
      </div>
      <div className="register">
        <Form />
      </div>
      <div className="question">
        <TagList />
      </div>
    </div>
  );
}
