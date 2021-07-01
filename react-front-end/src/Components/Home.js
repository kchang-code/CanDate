import React from 'react';
import PhotoList from './PhotoList';

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <div className="image-wall">
        <PhotoList image={props.image} />
      </div>

      <div className="register">
        <form action="/register" method="POST">
          <div>
            <label for="first_name" className="label">First Name:</label>
            <input className="input" type="text" name="first_name" />
            <label for="last_name" className="label">Last Name:</label>
            <input className="input" type="text" name="last_name" />
            <label for="email" className="label">email:</label>
            <input className="input" type="email" name="email" />
            <label for="password" className="label">password:</label>
            <input className="input" type="text" name="password" />
            <button type="submit" className="btn btn-primary">sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
