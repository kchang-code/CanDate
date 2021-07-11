import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Chip from '@material-ui/core/Chip';
import './TagListItem.scss';
// import FaceIcon from '@material-ui/icons/Face';
// import DoneIcon from '@material-ui/icons/Done';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(0.5),
//     },
//   },
// }));

const TagListItem = (props) => {
  // const classes = useStyles();

  const [num, setNum] = useState(1);
  const [newColor, setNewColor] = useState('lightgrey');
  // const [icon, setIcon] = useState('null');

  function handleClick(num, name, id) {
    let newTagUser = {
      user_id: id,
      tag_id: name,
    };
    num++;
    setNum(num);
    if (num % 2 === 0) {
      setNewColor('#f2a1a3');
      // setIcon(DoneIcon);
      axios
        .put('http://localhost:8080/api/user_tag/new', { newTagUser })
        .catch((err) => console.log(err));
      return;
    }
    setNewColor('lightgrey');
    // setIcon(FaceIcon);
  }

  return (
    // <Chip
    //   label={props.name}
    //   onClick={() => {
    //     handleClick(num, props.tag_id, props.id);
    //   }}
    //   // color={newColor}
    //   style={{ backgroundColor: newColor }}
    // />
    <Button
      className="tag_button"
      onClick={() => {
        handleClick(num, props.tag_id, props.id);
      }}
      style={{ backgroundColor: newColor, color: 'black', border: 'none' }}
    >
      {props.name}{' '}
    </Button>
  );
};

export default TagListItem;
