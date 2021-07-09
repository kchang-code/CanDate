import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function SelectTagsInFilter(props) {
  const [newColor, setNewColor] = useState('transparent')
  const [select, setSelect] = useState(false)

  const buttonColor = (select) => {

    if (select) {
      setSelect(false)
      setNewColor('transparent')
    } else {
      setSelect(true)
      setNewColor('red')
    }
  }
  return (
    <Button 
      class="btn"
      onClick={() => { props.handleTagClick(props.id); buttonColor(select) }}
      style={{ backgroundColor: newColor }}
      variant="outlined-primary"
    >{props.name}</Button>
  )
}
