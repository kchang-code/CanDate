import React from 'react';

export default function Photo(props) {

  return (
    <img className="photo" src={props.image} alt='wall' />
  );
}