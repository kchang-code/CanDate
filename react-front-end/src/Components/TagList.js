import React from 'react';
import TagListItem from './TagListItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//   submit: {
//     margin: theme.spacing(3, 0, 2),

//   },

// }));

export default function TagList(props) {
  // const classes = useStyles();
  const lists = props.tags.map((item) => {
    return (
      <TagListItem name={item.name} tag_id={item.id} id={props.id} />
    );
  });
  // console.log(props.tagPage)

  return (
    <div className="tagList" >
      <img src='https://github.com/MattLuo90/CanDate/blob/master/react-front-end/src/docs/logo.jpg?raw=true' width="80" style={{ marginTop: "10px", marginBottom: "-20px" }} />
      <h1>Passions</h1>
      <div style={{ fontSize: "35px" }}>{lists}</div>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        // className={classes.submit}
        onClick={() => window.location.replace(`http://localhost:3002/user/${props.id}`)}
        style={{ width: '25vw ', marginTop: '10px' }}
      >
        Submit
      </Button>
    </div>
  );
}