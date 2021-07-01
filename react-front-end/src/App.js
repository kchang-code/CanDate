import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Message from './Components/Message';


function App() {
  const pics = [
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { pic: 'https://randomuser.me/api/portraits/men/67.jpg' },
  ]

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
            <Home image={pics} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
