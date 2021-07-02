import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Question(props) {
  const classes = useStyles();
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  const update = (gender, height, address, age, description) => {
    let updateUser = {
      gender,
      height,
      address,
      age,
      description
    };

    axios
      .put('http://localhost:8080/api/users', { updateUser })
      .then(() => console.log('done'))
      .catch((err) => console.log('1111---v', err));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Tell us about yourself
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="gender"
                variant="outlined"
                required
                fullWidth
                id="gender"
                label="Gender"
                autoFocus
                onChange={(e) => setGender(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="height"
                label="Height"
                name="height"
                onChange={(e) => setHeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address(City)"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="about-you"
                label="About you"
                type="text"
                id="about-you"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => { update(gender, height, address, age, description) }}
            onClick={props.tagPage}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    // <form onSubmit={(e) => e.preventDefault()}>
    //   <div className="forms">
    //     <label for="gender"> Select you gender</label>
    //     <select name="gender" onSelect={(e) => setGender(e.target.value)}>
    //       <option value="none" selected>Gender</option>
    //       <option value="male">Male</option>
    //       <option value="female">Female</option>
    //       <option value="other">other</option>
    //     </select >
    //     <div>
    //       <label for="height" className="label">
    //         Height(in meters):
    //       </label>
    //       <input
    //         className="input"
    //         type="text"
    //         name="Height"
    //         onChange={(e) => setHeight(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label for="city" className="label">
    //         Address(City):
    //       </label>
    //       <input
    //         className="input"
    //         type="email"
    //         name="city"
    //         onChange={(e) => setAddress(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label for="age" className="label">
    //         Age:
    //       </label>
    //       <input
    //         className="input"
    //         type="text"
    //         name="age"
    //         onChange={(e) => setAge(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label for="age" className="label">
    //         Age:
    //       </label>
    //       <input
    //         className="input"
    //         type="text"
    //         name="age"
    //         onChange={(e) => setAge(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <button
    //         type="submit"
    //         className="btn btn-primary"
    //       // onClick={() => { save(first_name, last_name, email, password) }}
    //       >
    //         sign up
    //       </button>
    //     </div>
    //   </div>
    // </form >
  );
}