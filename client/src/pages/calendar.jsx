import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Navigation from '../components/Navigation/navigation.js';
import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const TodoCalendar = () => {
  const [todos, setTodos] = useState([
    { start_date: new Date(), end_date: new Date(), todo_body: 'test event' },
    {
      start_date: new Date(),
      end_date: moment().add(1, 'hours').toDate(),
      todo_body: 'test event 2',
    },
  ]);
  const config = {
    url: '/api/',
    method: 'get',
    headers: {
      target:
        'http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos?userId=9',
    },
  };
  useEffect(
    (args) => {
      axios(config)
        .then((results) => {
          setTodos(results.data);
          console.log(results);
        })
        .catch((reason) => {
          console.error(reason);
        });
    },
    [todos]
  );

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
            start: todo.start_date,
            end: todo.end_date,
            title: todo.todo_body,
          };
        })}
      />
    </>
  );
};

export default TodoCalendar;
