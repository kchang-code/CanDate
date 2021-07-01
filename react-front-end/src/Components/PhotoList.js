import React from 'react';
import Photo from './Photo';

export default function PhotoList(props) {
  const lists = props.image.map((item) => {
    return (
      <Photo image={item.pic} />
    );
  });
  return (
    <ul>{lists}</ul>
  );
}