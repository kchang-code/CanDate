import React, { useState } from 'react';
import axios from 'axios';
export default function Question(props) {
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
    <div></div>
  );
}