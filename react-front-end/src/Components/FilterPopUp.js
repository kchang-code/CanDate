import React, { useState } from "react";
import "./FilterPopUp.scss";
import SelectTagsInFilter from "./SelectTagsInFilter";
import SelectCityInFilter from "./SelectCityInFilter";
import Slider from "@material-ui/core/Slider";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
    if (!cities.includes(user.address) && user.address) {
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


  const cityList = cities.map((city) => {
    if (!cities.includes(city)) {
      cities.push(city)
    }
    return (
      <SelectCityInFilter
        city={city}
        handleAddressClick={props.handleAddressClick}
      />)
  })


  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setGender({ ...props.state, gender: event.target.value });
  };

  return (
    <div className="popup-box">
      <div className="box">
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={
              handleChange} row>
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <span>
          <h3>Age:</h3>
          <Slider
            style={{ width: 300 }}
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
          <div>{cityList}</div>
        </span>
        <h3>Interests:</h3>
        <div>{lists}</div>

        <div onClick={props.save}>{props.savebtn}</div>
      </div>
    </div>
  );
}
