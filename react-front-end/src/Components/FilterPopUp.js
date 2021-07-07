import React, { useState } from "react";
import "./FilterPopUp.scss";
import SelectTagsInFilter from "./SelectTagsInFilter";
import Chip from "@material-ui/core/Chip";
import Slider from "@material-ui/core/Slider";
import DoneIcon from '@material-ui/icons/Done';

let cities = [];
export default function FilterPopUp(props) {
  props.users.map((user) => {      
    if (!cities.includes(user.address)) {
      cities.push(user.address)

    }})

  return (
    <div className="popup-box">
      <div className="box">
        <h1>Filter Results:</h1>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <span>
          <h3>Age:</h3>
          <Slider
            style={{ width: 300, margin: 30 }}
            value={props.ageRange}
            onChange={props.updateAgeRange}
          />
        </span>
        <span>
          <h3>City:</h3>
          {cities.map((city) => {      
            if (!cities.includes(city)) {
              cities.push(city)

            }              
            return (
              <Chip 
              color="primary" 
              label={city}
              onClick={() => props.handleAddressClick(city)}
              deleteIcon={<DoneIcon/>}
            
              />
              
            );
          })}
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
