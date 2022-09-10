import React, { useEffect, useState, useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Navigation from '../components/Navigation/navigation.js';
import moment from 'moment';
import { CurrentUserContext } from '../index.js';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const TodoCalendar = ({ users }) => {
  const [todos, setTodos] = useState([
    { start_date: new Date(), end_date: new Date(), todo_body: 'test event' },
    {
      start_date: new Date(),
      end_date: moment().add(1, 'hours').toDate(),
      todo_body: 'test event 2',
    },
  ]);
  console.log(users);
  const { user } = useContext(CurrentUserContext);
  const config = {
    url: '/api/',
    method: 'get',
    headers: {
      target:
        'http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos?userId=' +
        user.user_id,
    },
  };
  if (!users?.length) {
    useEffect(
      (args) => {
        axios(config)
          .then((results) => {
            setTodos(
              results.data.filter(
                ({ status }) =>
                  status === 'pending' ||
                  status === 'active' ||
                  status === 'late'
              )
            );
          })
          .catch((reason) => {
            console.error(reason);
          });
      },
      [todos.length]
    );
  }
  if (users?.length) {
    setTodos(
      users
        .map((user) =>
          user.todos.map((todo) => ({
            ...todo,
            todo_body: `[${user.user_email}] ` + todo.todo_body,
          }))
        )
        .flat()
        .filter(
          ({ status }) =>
            status === 'pending' || status === 'active' || status === 'late'
        )
    );
  }
  return (
    <>
      <Navigation />
      <Calendar
        defaultDate={moment().toDate()}
        defaultView="month"
        localizer={localizer}
        style={{ height: '100vh' }}
        resizable
        events={todos?.map((todo) => {
          return {
            start: new Date(todo.start_date),
            end: new Date(todo.end_date),
            title: todo.todo_body,
          };
        })}
      />
    </>
  );
};

export default TodoCalendar;
