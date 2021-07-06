// import React, { useState } from 'react';
// import PhotoList from './PhotoList';
// import './Home.scss';

// export default function Home(props) {

//   return (
//     <div className="home-container">
//       <div className="image-wall">
//         <PhotoList image={props.image} />
//       </div>
//       <div className="register">
//         <Form />
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import PhotoList from './PhotoList';
import TagList from './TagList';
import useVisualMode from '../hooks/useVisualMode';
import Question from './Question';
import SignIn from './SignIn';
import Form from './Form';
import './Home.scss';

export default function Home(props) {
  const FORM = 'FORM';
  const QUESTION = 'QUESTION';
  const TAG = 'TAG';
  const SIGN = 'SIGN';

  const id = props.image.length + 1;

  const { mode, transition, back } = useVisualMode(FORM);


  function change() {
    transition(QUESTION);
  }
  function tagPage() {
    transition(TAG);
  }
  function Sign() {
    transition(SIGN);
  }

  return (
    <div className="home-container">
      <div className="image-wall">
        <PhotoList image={props.image} />
      </div>
      <div className="register">
        {mode === FORM && <Form change={change} SignIn={Sign} />}
        {mode === QUESTION && <Question tagPage={tagPage} id={id} />}
        {mode === TAG && <TagList tags={props.tags} id={id} />}
        {mode === SIGN &&
          <SignIn
            back={back}
            users={props.image}
            findPasswordByEmail={props.findPasswordByEmail}
          />}
      </div>
    </div>
  );
}
