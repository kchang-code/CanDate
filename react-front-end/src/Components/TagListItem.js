import React, { useState } from "react";
import axios from "axios";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const TagListItem = props => {
  const [num, setNum] = useState(1)
  const [newColor, setNewColor] = useState('default')
  const [icon, setIcon] = useState('null')

  function handleClick(num, name, id) {
    let newTagUser = {
      user_id: id,
      tag_id: name
    }
    num++
    setNum(num)
    if (num % 2 === 0) {
      setNewColor("secondary")
      setIcon(DoneIcon)
      axios.put("http://localhost:8080/api/user_tag/new", { newTagUser })
        .catch((err) => console.log(err));
      return
    }
    setNewColor("default")
    setIcon(FaceIcon)
    return
  }

  return (

    <Chip
      label={props.name}
      onClick={() => { handleClick(num, props.tag_id, props.id) }}
      color={newColor}
    />

  )
}


export default TagListItem;