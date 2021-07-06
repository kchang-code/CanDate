import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import className from 'classnames';

export default function SelectTagsInFilter (props) {
  const [tagButtonColor, setTagButtonColor] = useState(true)

  const toggleButtonColor = () => {
    const currentStatus = tagButtonColor
    setTagButtonColor(!currentStatus)
    console.log("success")
  }

  return (
    
    <div>
      
      <h3>Interests:</h3>
    {props.tags.map((item) => {
      return (
        <Button 
        className={tagButtonColor === true  ? "tags" : "tags-selected" }
        onClick={() => props.handleTagClick(item.id, toggleButtonColor)} 
        size="small" variant="outlined" color="primary">
          {item.name}
        </Button>
      );
    })}
    {/* {console.log("clicked", selectTag)} */}
    </div>
  )
}