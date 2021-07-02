import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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