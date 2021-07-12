import React, { useEffect, useState } from 'react';
import './FilterPopUp.scss';
import SelectTagsInFilter from './SelectTagsInFilter';
import SelectCityInFilter from './SelectCityInFilter';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


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
  ];

  props.users.forEach((user) => {
    if (!cities.includes(user.address) && user.address) {
      cities.push(user.address);
    }
  });

  const lists = props.content.map((item) => {
    return (
      <SelectTagsInFilter
        id={item.id}
        name={item.name}
        handleTagClick={props.handleTagClick}
        state={props.state}
        setStartNum={props.setStartNum}
        setEndNum={props.setEndNum}
      />
    );
  });

  const cityList = cities.map((city) => {
    if (!cities.includes(city)) {
      cities.push(city);
    }
    return (
      <SelectCityInFilter
        city={city}
        handleAddressClick={props.handleAddressClick}
        state={props.state}
        setStartNum={props.setStartNum}
        setEndNum={props.setEndNum}
      />
    );
  });

  const [value, setValue] = useState('');
  let thisGender = props.state.gender;
  useEffect(() => {
    if (thisGender !== '') {
      setValue(thisGender);
    } else {
      setValue('');
    }
  }, [thisGender]);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setGender({ ...props.state, gender: event.target.value });
  };

  // function simulateNetworkRequest() {
  //   return new Promise((resolve) => setTimeout(resolve, 2000));
  // }

  return (
    <div className="popup-box">
      <div className="box">
        <div>
          <FormControl component="fieldset">
            <p class="age-title">Gender:</p>

            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
              row
            >
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
          <p class="age-title">Age:</p>
          <Slider
            style={{ width: 300, color: '#f2a1a3' }}
            defaultValue={20}
            step={5}
            value={props.ageRange}
            valueLabelDisplay="auto"
            onChange={props.updateAgeRange}
            marks={marks}
          />
        </span>
        <span>
          <p class="city-title">City:</p>
          <div>{cityList}</div>
        </span>
        <p class="interest-title">Interests:</p>
        <div>{lists}</div>
      </div>
    </div>
  );
}
