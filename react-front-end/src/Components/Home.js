import React from 'react';
import PhotoList from './PhotoList';
import './Home.scss';

export default function Home(props) {

  return (
    <div className="home-container">
      <div className="image-wall">
        <PhotoList image={props.image} />
      </div>

      <div className="register">
        <form action="/register" method="POST">
          <div className="forms">
            <div>
              <label for="first_name" className="label" style={{ marginTop: "50px" }} >First Name:</label>
              <input className="input" type="text" name="first_name" />
            </div>
            <div>
              <label for="last_name" className="label" style={{ marginTop: "50px" }}>Last Name:</label>
              <input className="input" type="text" name="last_name" />
            </div>
            <div>
              <label for="email" className="label" style={{ marginTop: "50px" }}>email:</label>
              <input className="input" type="email" name="email" />
            </div>
            <div>
              <label for="password" className="label" style={{ marginTop: "50px" }}>password:</label>
              <input className="input" type="text" name="password" />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">sign up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
