import React, { useState } from "react";
import "./FilterPopUp.scss";
import SelectTagsInFilter from "./SelectTagsInFilter";
import Chip from "@material-ui/core/Chip";
import Slider from "@material-ui/core/Slider";

let cities = [];
export default function FilterPopUp(props) {

  const marks = [
    {
      value: 20,
      label: '20',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 60,
      label: '60',
    },
    {
      value: 80,
      label: '80',
    },
  ]


  props.users.map((user) => {
    if (!cities.includes(user.address)) {
      cities.push(user.address)
    }
  })

  const lists = props.content.map((item) => {
    return (<SelectTagsInFilter
      id={item.id}
      name={item.name}
      handleTagClick={props.handleTagClick}
    />)
  })

  return (
    <div className="popup-box">
      <div className="box">
        <span>
          <h3>Age:</h3>
          <Slider
            style={{ width: 300, margin: 30 }}
            defaultValue={20}
            step={5}
            value={props.ageRange}
            valueLabelDisplay="auto"
            onChange={props.updateAgeRange}
            marks={marks}
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
              />
            );
          })}
        </span>
        <h3>Interests:</h3>
        <div>{lists}</div>

        <div onClick={props.save}>{props.savebtn}</div>
      </div>
    </div>
  );
}
