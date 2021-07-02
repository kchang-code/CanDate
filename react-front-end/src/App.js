import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Message from './Components/Message';
import axios from 'axios';
import { useState, useEffect } from 'react';

import UserPage from './Components/user-page';

function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/users'),
      axios.get('http://localhost:8080/api/message'),
      axios.get('http://localhost:8080/api/tags'),
    ]).then((all) => {
      const [user, message, tag] = all;
      setUsers(user.data.users);
      setMessages(message.data.message);
      setMessages(tag.data.tags);
    });

    // axios.get('http://localhost:8080/api/users').then((data) => {
    //   setUsers(data.data.users);
    // });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/message">
            <Message messages={messages} users={users} />
          </Route>
          <Route path="/profile">
            <p>PROFILE PAGE</p>
          </Route>

          <Route path="/user">
            <UserPage />
          </Route>

          <Route path="/">
            <Home image={users} tag={tags} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
