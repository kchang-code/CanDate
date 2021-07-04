import React, { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';


const TagListItem = props => {
  const [num, setNum] = useState(1)
  const [newColor, setNewColor] = useState('default')

  function handleCLick(num, name, id) {
    let newTagUser = {
      user_id: id,
      tag_id: name
    }
    num++
    setNum(num)
    if (num % 2 === 0) {
      setNewColor("secondary")
      axios.put("http://localhost:8080/api/user_tag/new", { newTagUser })
        .then(() => {
          console.log("newUserTag")
        })
        .catch((err) => console.log('1111---v', err));
      return
    }
    setNewColor("default")
    return
  }

  return (

    <Button
      onClick={() => { handleCLick(num, props.tag_id, props.id) }}
      type="submit"
      variant="contained"
      color={newColor}
      name={props.name}
    >{props.name}</Button>

  )
}


export default TagListItem;