import React, {useState} from 'react';
import Button from "@material-ui/core/Button";


export default function SelectTagsInFilter (props) {
  const [select, setSelect] = useState([]);

  const handleTagClick = (itemId) => {
    const selectArr = [...select];
    selectArr.push(itemId)
    setSelect(selectArr)
  };

  return (
    <div>
    {props.tags.map((item) => {
      return (
        <Button 
        class="tags" 
        // item.index is the id 
        onClick={() => handleTagClick(item.id)} 
        style={{backgroundColor: select.bgColor}}
        size="small" variant="outlined" color="primary">
          {item.name}
        </Button>
      );
    })}
    {console.log("clicked", select)}
    </div>
  )
}