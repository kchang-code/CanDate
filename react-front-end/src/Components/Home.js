import React from 'react';
import PhotoList from './PhotoList';
import TagList from './TagList';
import useVisualMode from '../hooks/useVisualMode';
import Question from './Question';
import Status from './Status';
import Form from './Form';
import './Home.scss';

export default function Home(props) {
  const FORM = "FORM"
  const QUESTION = "QUESTION"
  const TAG = "TAG"

  const { mode, transition, back } = useVisualMode(FORM)

  function change() {
    transition(QUESTION)
  }
  function tagPage() {
    transition(TAG)
  }

  return (
    <div className="home-container">
      <div className="image-wall">
        <PhotoList image={props.image} />
      </div>
      <div className="register">
        {mode === FORM && <Form change={change} />}
        {mode === QUESTION && <Question tagPage={tagPage} />}
        {mode === TAG && <TagList tags={props.tags} />}
      </div>
    </div>
  );
}


