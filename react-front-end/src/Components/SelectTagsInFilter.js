import React, {useState} from 'react';
import Chip from "@material-ui/core/Chip";
import className from 'classnames';

export default function SelectTagsInFilter (props) {

  return (
    
    <div>

      <h3>Interests:</h3>
    {props.tags.map((item) => {
      return (
        <Chip 
        // className={tagButtonColor === true  ? "tags" : "tags-selected" }
        onClick={() => props.handleTagClick(item.id)} 
        color="primary"
        label={item.name}
        >
          
        </Chip>
      );
    })}
    {/* {console.log("clicked", selectTag)} */}
    </div>
  )
}