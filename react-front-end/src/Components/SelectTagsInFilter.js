import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

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
    
    <Button variant="outline-primary">Primary</Button>

  )
}


