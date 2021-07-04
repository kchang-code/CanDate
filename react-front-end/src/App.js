import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Message from './Components/Message';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

import UserPage from './Components/user-page';
const ENDPOINT = 'ws://localhost:8080/message';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const socket = new WebSocket(ENDPOINT);
    socket.onmessage = function (event) {
      console.log('event', event, event.data);
    };
    socket.onopen = function () {
      socket.send('ping');
    };

    socket.onclose = function () {
      console.log('Close');
    };
  }, []);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/users'),
      axios.get('http://localhost:8080/api/message'),
      axios.get('http://localhost:8080/api/tags'),
    ])
      .then((all) => {
        const [user, message, tag] = all;
        setUsers(user.data.users);
        setMessages(message.data.message);
        setTags(tag.data.tags);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:id/message">
            <Message
              messages={messages}
              users={users}
              setMessages={setMessages}
              loading={loading}
            />
          </Route>
          <Route path="/profile">
            <p>PROFILE PAGE</p>
          </Route>

          <Route path="/user">
            <UserPage />
          </Route>

          <Route path="/">
            <Home image={users} tags={tags} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
