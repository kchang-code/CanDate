import React, { useState } from "react";
import "./FilterPopUp.scss";
import SelectTagsInFilter from "./SelectTagsInFilter";
import Button from "@material-ui/core/Button";

export default function FilterPopUp(props) {


  return (
    <div className="popup-box">
      <div className="box">
        <h1>Filter Interest Tags:</h1>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <span>
        </span>
        <span>
          <SelectTagsInFilter
            tags={props.content}
            handleTagClick={props.handleTagClick}
          />
        </span>
        <div onClick={props.save}>{props.savebtn}</div>
      </div>
    </div>
  );
}
