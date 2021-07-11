import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './selectTagsInFilter.scss';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>;

export default function SelectTagsInFilter(props) {
  const [newColor, setNewColor] = useState('lightgrey');

  const [select, setSelect] = useState(false);
  const [fontColor, setfontColor] = useState('black');
  let tags = props.state.tags;
  const buttonColor = (select) => {
    if (select) {
      setSelect(false);
      setNewColor('lightgrey');
      setfontColor('black');
    } else {
      setSelect(true);
      setNewColor('#F2A1A3');
    }
  };
  useEffect(() => {
    if (tags.includes(props.id)) {
      setNewColor('#f2a1a3');
    } else {
      setNewColor('lightgrey');
    }
  }, [tags.length]);

  return (
    <Button
      className="filter_button"
      onClick={() => {
        props.handleTagClick(props.id);
        buttonColor(select);
      }}
      style={{ backgroundColor: newColor, color: fontColor }}
      variant="outlined-primary"
    >
      {props.name}
    </Button>
  );
}
