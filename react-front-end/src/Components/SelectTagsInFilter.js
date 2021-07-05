import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import classNames from 'classnames';

export default function SelectTagsInFilter (props) {
  

  return (
    <div>
    {props.tags.map((item) => {
      return (
        <Button 
        classNames={"tags" }
        onClick={() => props.handleTagClick(item.id)} 
        size="small" variant="outlined" color="primary">
          {item.name}
        </Button>
      );
    })}
    {/* {console.log("clicked", selectTag)} */}
    </div>
  )
}