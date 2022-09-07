import React from 'react';
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import TodoCalendar from './pages/calendar.jsx';

import StatisticsWrapper from './components/Statistics/statisticsWrapper.js';
import SharedCalendars from './components/SharedCalendars/sharedCalendars.js'
import {HashRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

import Main from './components/Todo/Main.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

const CurrentUserContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.setUser = this.setUser.bind(this);
  }

  // if there is a cookie, get the user data from the server
  componentDidMount() {
    // this will be -1 if there is no cookie
    const cookie = document.cookie.indexOf('CalentodoSession');
    console.log(cookie)
    if (cookie) {
      axios
        .get('/api/users/me')
        .then((res) => {
          this.setUser(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // update state to container the new user data
  // expects and object
  setUser(data) {
    this.setState({ user: data });
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider
          value={{ user: this.state.user, setUser: this.setUser }}
        >
          <HashRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/todo" element={<Main />} /> */}
              <Route path="/calendar" element={<TodoCalendar />} />
              <Route path="/statistics" element={<StatisticsWrapper />} />
              <Route path="/sharedCalendars" element={<SharedCalendars />} />
            </Routes>
          </HashRouter>
        </CurrentUserContext.Provider>
      </div>
    );
  }
}

root.render(<App />);

export { CurrentUserContext };
