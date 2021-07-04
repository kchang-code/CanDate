import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function useUserPage () {
  const [users, setUsers] = useState([])
  
  
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/interests'),
    ]).then((res) => {
      console.log("res", res)
      setUsers(res[0].data.interests)
    })
    .catch(err => console.log(err))
  }, []);

  return {users}
}
