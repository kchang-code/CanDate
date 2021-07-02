import React, { useState } from "react";
import Button from '@material-ui/core/Button';


const TagListItem = props => {
  const [num, setNum] = useState(1)
  const [newColor, setNewColor] = useState('default')
  console.log(num)
  function handleCLick(num) {
    num++
    setNum(num)
    if (num % 2 === 0) {
      setNewColor("secondary")
      return
    }
    setNewColor("default")
    return
  }

  return (

    <Button
      onClick={() => { handleCLick(num) }}
      type="submit"
      variant="contained"
      color={newColor}
    >{props.name}</Button>

  )
}


export default TagListItem;