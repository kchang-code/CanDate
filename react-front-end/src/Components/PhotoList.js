import React from 'react';
import Photo from './Photo';

export default function PhotoList(props) {
  // const imageArr = props.image.slice(40, 75)
  const lists = props.image.slice(0, 28).map((item) => {
    return (
      <Photo image={item.profile_photo} />
    );
  });
  return (
    <ul>{lists}</ul>
  );
}