import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Message from './Components/Message';
import axios from 'axios';
import { useState, useEffect } from 'react';
<<<<<<< HEAD
import UserPage from './Components/UserPage';
=======
>>>>>>> 4b6abb42f7cc99df0994461dc8be763138589e72
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';
<<<<<<< HEAD
=======
import ProfileDetail from './Components/ProfileDetail';
import UserPage from './Components/UserPage';
>>>>>>> 4b6abb42f7cc99df0994461dc8be763138589e72
const ENDPOINT = 'ws://localhost:8080/message';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

let realTimeData;
function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [tags, setTags] = useState([]);
<<<<<<< HEAD
  const [user_tag, setUserTags] = useState([]);
=======
>>>>>>> 4b6abb42f7cc99df0994461dc8be763138589e72
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user_tag, setUserTags] = useState([]);
  useEffect(() => {
    const socket = new WebSocket(ENDPOINT);
    socket.onmessage = function (event) {
      realTimeData = event.data;

      if (messages.length !== 0 && realTimeData) {
        // console.log('realTimeData', realTimeData);
        const needToSet = [...messages, ...JSON.parse(realTimeData)];
        setMessages(needToSet);
      }
    };

    socket.onclose = function () {
      console.log('Close');
    };
  }, [loading]);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/users'),
      axios.get('http://localhost:8080/api/message'),
      axios.get('http://localhost:8080/api/tags'),
<<<<<<< HEAD
      axios.get('http://localhost:8080/api/user_tag'),
    ])
      .then((all) => {
        const [user, message, tag, user_tag] = all;
=======
      axios.get('http://localhost:8080/api/favorite'),
      axios.get('http://localhost:8080/api/user_tag'),
    ])
      .then((all) => {
        const [user, message, tag, favorite] = all;
        setUserTags(user_tag.data.user_tag);
>>>>>>> 4b6abb42f7cc99df0994461dc8be763138589e72
        setUsers(user.data.users);
        setMessages(message.data.message);
        setMessages(tag.data.tags);
        setUserTags(user_tag.data.user_tag);
        setTags(tag.data.tags);
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
              realTimeData={realTimeData}
              favorite={favorite}
            />
          </Route>
          <Route path="/profile">
            <p>PROFILE PAGE</p>
          </Route>

          <Route path="/user">
            <UserPage tags={tags} user_tag={user_tag} />
<<<<<<< HEAD
=======
          </Route>
          <Route path="/detail">
            <ProfileDetail />
>>>>>>> 4b6abb42f7cc99df0994461dc8be763138589e72
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
