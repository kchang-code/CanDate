import React from "react";
import Button from '@material-ui/core/Button';


const TagListItem = props => {

  return (

    <Button
      onClick={() => { }}
      type="submit"
      variant="contained"
      color="withe"
    >{props.name}</Button>

  )
}


export default TagListItem;