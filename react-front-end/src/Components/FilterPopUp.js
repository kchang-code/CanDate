import React, { useState } from "react";
import "./FilterPopUp.scss";
import Button from "@material-ui/core/Button";

export default function FilterPopUp(props) {

  const [select, setSelect] = useState({
    bgColor: ""
  });

  const tagClick = () => {
    setSelect({
      bgColor: "blue"
    })
  };

  return (
    <div className="popup-box">
      <div className="box">
        <h1>Filter Interest Tags:</h1>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <span>
          {props.content.map((item) => {
            return (
              <Button class="tags" style={{backgroundColor: select.bgColor}}
              onClick={tagClick} size="small" variant="outlined" color="primary">
                {item}
              </Button>
            );
          })}
        </span>
        <div onClick={props.save}>{props.savebtn}</div>
      </div>
    </div>
  );
}
