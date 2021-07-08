import React, { useState } from 'react';

export default function SelectTagsInFilter(props) {
  const [newColor, setNewColor] = useState('grey')
  const [select, setSelect] = useState(false)

  const buttonColor = (select) => {

    if (select) {
      setSelect(false)
      setNewColor('grey')
    } else {
      setSelect(true)
      setNewColor('red')
    }
  }
  return (
    <button
      onClick={() => { props.handleTagClick(props.id); buttonColor(select) }}
      style={{ backgroundColor: newColor }}
    >{props.name}</button>
  )
}