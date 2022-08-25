import React from 'react';
import {createContext} from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

const container = document.getElementById('root');
const root = createRoot(container);

const CurrentUserContext = createContext()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.setUser = this.setUser.bind(this)
  }

  // update state to container the new user data
  // expects and object
   setUser (data) {
    this.setState({user: data})
  }

  render() {
    return (
      <div style={{background: '#0a0f72'}}>
        <CurrentUserContext.Provider value={{user: this.state.user, setUser: this.setUser}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </CurrentUserContext.Provider>
      </div>
    );
  }
}

root.render(<App />);

export {CurrentUserContext}
