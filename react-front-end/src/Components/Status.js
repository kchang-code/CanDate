import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '300px',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Status(props) {
  useEffect(() => {
    function setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = '';

      var cursorPosition = 0,
        tag = '',
        writingTag = false,
        tagOpen = false,
        typeSpeed = 30,
        tempTypeSpeed = 0;

      var type = function () {
        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === '<') {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = '';
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === ' ') {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = typeSpeed;
          }
          t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === '>') {
          tempTypeSpeed = typeSpeed;
          writingTag = false;
          if (tagOpen) {
            var newSpan = document.createElement('span');
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
        }
        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
        }
      };
      return {
        type: type,
      };
    }
    var typer = document.getElementById('typewriter');

    var typewriter = setupTypewriter(typer);

    typewriter.type();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
      <pre id="typewriter" style={{ fontSize: '30px' }}>
        <p>Function findLover (myself) </p>
        <p>if (myself.passions === CanDate.users.passions)</p>
        <p>return MyLove;</p>
        <p>We find your love;</p>
      </pre>
    </div>
  );
}
