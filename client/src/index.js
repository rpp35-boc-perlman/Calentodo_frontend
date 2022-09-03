import React from 'react';
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import TodoCalendar from './pages/calendar.jsx';

import Statistics from './components/Statistics/statistics.js';
import SharedCalendars from './components/SharedCalendars/sharedCalendars.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/todo" element={<Main />} /> */}
              <Route path="/calendar" element={<TodoCalendar />} />
<<<<<<< HEAD
              <Route path="/statistics" element={<Statistics />} />
=======
              <Route path="/statistics" element={<Statistics />}/>
              <Route path="/sharedCalendars" element={<SharedCalendars />}/>
>>>>>>> 5e258ed8bfe3cfd00cffdbf697f83d86cb8e6fe2
            </Routes>
          </BrowserRouter>
        </CurrentUserContext.Provider>
      </div>
    );
  }
}

root.render(<App />);

export { CurrentUserContext };
