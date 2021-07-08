import React, { useState } from 'react';

export default function SelectCityInFilter(props) {
  const [newColor, setNewColor] = useState('grey')
  const [select, setSelect] = useState(false)
  console.log('city', props.city)
  const cityColor = (select) => {

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
      onClick={() => { props.handleAddressClick(props.city); cityColor(select) }}
      style={{ backgroundColor: newColor }}
    >{props.city}</button>
  );
}