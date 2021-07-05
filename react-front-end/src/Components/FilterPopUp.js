import React, { useContext, useEffect } from "react";
import "./FilterPopUp.scss";
import Button from "@material-ui/core/Button";
import { TagsContext } from "../Context/TagsContext";

export default function FilterPopUp(props) {
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
              <Button size="small" variant="outlined" color="primary">
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
