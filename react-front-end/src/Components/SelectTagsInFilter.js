import React, {useState} from 'react';
import Button from "@material-ui/core/Button";


export default function SelectTagsInFilter (props) {
  

  return (
    <div>
    {props.tags.map((item) => {
      return (
        <Button 
        size="small" variant="outlined" color="primary"
        class="tags" 
        // item.index is the id 
        onClick={() => props.handleTagClick(item.id)} 
        // style={{backgroundColor: select.bgColor}}
        size="small" variant="outlined" color="primary">
          {item.name}
        </Button>
      );
    })}
    {/* {console.log("clicked", selectTag)} */}
    </div>
  )
}