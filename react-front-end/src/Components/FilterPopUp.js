import React, { useState } from "react";
import "./FilterPopUp.scss";
import SelectTagsInFilter from "./SelectTagsInFilter";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

export default function FilterPopUp(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <h1>Filter Results:</h1>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <span>
          <h3>Age:</h3>
          {/* <p>{props.ageRange}</p> */}
          <Slider
            style={{ width: 300, margin: 30 }}
            value={props.ageRange}
            onChange={props.updateAgeRange}
          />
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
