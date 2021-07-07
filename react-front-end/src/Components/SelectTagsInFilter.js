import React, {useState} from 'react';
import Chip from "@material-ui/core/Chip";
import className from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

export default function SelectTagsInFilter (props) {

 
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

  return (
    
    <div>

      <h3>Interests:</h3>
    {props.tags.map((item) => {
      return (
        <Chip 
        // if clicked, set classname to 
        // className={ }
        onClick={() => props.handleTagClick(item.id)} 
        label={item.name}
        />
          );
    })}
      

    </div>
      )
}