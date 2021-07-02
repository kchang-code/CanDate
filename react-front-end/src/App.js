import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Message from './Components/Message';
import axios from 'axios';
import { useState, useEffect } from 'react'



function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(data => {
        setUsers(data.data.users)
      })
  }, [])


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/profile">
            <p>PROFILE PAGE</p>
          </Route>

          <Route path="/user">
            <p>USER PAGE</p>
          </Route>

          <Route path="/">
            <Home image={users} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
