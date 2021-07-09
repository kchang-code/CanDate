import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonBase } from "@material-ui/core";
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>;

export default function SelectCityInFilter(props) {
  const [newColor, setNewColor] = useState("transparent");
  const [select, setSelect] = useState(false);
  const [fontColor, setfontColor] = useState('black');

  console.log("city", props.city);
  const cityColor = (select) => {
    if (select) {
      setSelect(false);
      setNewColor("transparent");
      setfontColor('black')
    } else {
      setSelect(true);
      setNewColor("#f50057");
      setfontColor('white');
    }
  };
  return (
    <Button
      onClick={() => {
        props.handleAddressClick(props.city);
        cityColor(select);
      }}
      style={{ backgroundColor: newColor, color: fontColor }}
      variant="outlined-primary"
    >
      {props.city}
    </Button>
  );
}
