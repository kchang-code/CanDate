import React, {useState} from 'react';
import Chip from "@material-ui/core/Chip";
import className from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

export default function SelectTagsInFilter (props) {

 

  return (
    
    <div>

      <h3>Interests:</h3>
    {props.tags.map((item) => {
      return (
        <Chip 
        onClick={() => props.handleTagClick(item.id)} 
        label={item.name}
        />
          );
    })}
      

    </div>
      )
}