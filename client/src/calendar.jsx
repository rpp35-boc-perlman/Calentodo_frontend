import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const TodoCalendar = ({ todos }) => {
  return (
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
  );
};

export default TodoCalendar;
