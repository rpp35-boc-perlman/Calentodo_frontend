import React from 'react';
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import TodoCalendar from './pages/calendar.jsx';

import StatisticsWrapper from './components/Statistics/statisticsWrapper.js';
import SharedCalendars from './components/SharedCalendars/sharedCalendars.js';
import { HashRouter, Routes, Route } from 'react-router-dom';

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
      //users: [
      checkedState: [],
      users: [],
    };

    this.setUser = this.setUser.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  // if there is a cookie, get the user data from the server
  // componentDidMount() {
  //   this will be -1 if there is no cookie
  //   const cookie = document.cookie.indexOf('CalentodoSession');
  //   console.log(cookie)
  //   if (cookie) {
  //     axios
  //       .get('/api/users/me')
  //       .then((res) => {
  //         this.setUser(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  // update state to container the new user data
  // expects and object

  setUser(data) {
    this.setState({ user: data });
  }

  componentDidMount() {
    axios
      .get('/api/users/me')
      .then((res) => {
        const config = {
          url: '/api/',
          method: 'get',
          headers: {
            target: `http://ec2-34-205-69-211.compute-1.amazonaws.com/users/${res.data.data.user_id}`,
          },
        };
        this.setUser(res.data.data);
        axios(config)
        .then(res => {
          for (var user of res.data.users) {
            user.isVisible = false;
          }
          this.setState({
            users: res.data.users
          },() => console.log(this.state.users, 'users'))
        })
        .catch((err) => {
          // console.error(err)
        })
        this.setState({
          checkedState: new Array(this.state.users.length).fill(false),
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  handleOnChange(position) {
    console.log('clicked');
    const updatedCheckedState = this.state.checkedState.map((item, index) =>
      index === position ? !item : item
    );
    const users = [...this.state.users];
    var user = users[position];
    user.isVisible = !user.isVisible;
    this.setState(
      {
        checkedState: updatedCheckedState,
        users: users,
      },
      () => console.log(this.state.users)
    );
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
              <Route path="/statistics" element={<StatisticsWrapper />}/>
              <Route path="/sharedCalendars" element={<SharedCalendars
                users={this.state.users}
                handleOnChange={this.handleOnChange}
                checkedState={this.state.checkedState}/>}
              />
            </Routes>
          </HashRouter>
        </CurrentUserContext.Provider>
      </div>
    );
  }
}

root.render(<App />);

export { CurrentUserContext };
