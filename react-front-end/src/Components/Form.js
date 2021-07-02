import React, { useState } from 'react';
import axios from 'axios';
export default function Form(props) {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const save = (first_name, last_name, email, password) => {
    let newUser = {
      first_name,
      last_name,
      email,
      password,
    };

    axios
      .put('http://localhost:8080/api/users', { newUser })
      .then(() => console.log('done'))
      .catch((err) => console.log('1111---v', err));
  };
  return (

    <form onSubmit={(e) => e.preventDefault()}>
      <div className="forms">
        <div>
          <label for="first_name" className="label">
            First Name:
          </label>
          <input
            className="input"
            type="text"
            name="first_name"
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div>
          <label for="last_name" className="label">
            Last Name:
          </label>
          <input
            className="input"
            type="text"
            name="last_name"
            onChange={(e) => setLast_name(e.target.value)}
          />
        </div>
        <div>
          <label for="email" className="label">
            email:
          </label>
          <input
            className="input"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label for="password" className="label">
            password:
          </label>
          <input
            className="input"
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => { save(first_name, last_name, email, password) }}>
            sign up
          </button>
        </div>
      </div>
    </form>
  );
}
