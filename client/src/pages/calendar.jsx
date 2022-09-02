import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

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
      todo_body: 'test event',
    },
  ]);
  useEffect(
    (args) => {
      axios
        .get('/api/todos')
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
      <Navigation />
    </>
  );
};

export default TodoCalendar;
