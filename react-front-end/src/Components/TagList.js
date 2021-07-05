import React from 'react';
import TagListItem from './TagListItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '80%'
  },

}));

export default function TagList(props) {
  const classes = useStyles();
  const lists = props.tags.map((item) => {
    return (
      <TagListItem name={item.name} tag_id={item.id} id={props.id} />
    );
  });
  return (
    <div>
      <h1>choose your tag</h1>
      <span>{lists}</span>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={props.tagPage}
      >
        Submit
      </Button>
    </div>
  );
}