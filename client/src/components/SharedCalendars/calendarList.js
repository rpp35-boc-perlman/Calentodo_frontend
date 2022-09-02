import React from 'react';
import CalendarItem from './calendarItem';

const calendarList = (props) => {
  return (
    <ul class="mdc-list" role="group" aria-label="List with checkbox items">
      {this.props.users.map(user => (
        <CalendarItem user={user} />
      ))}

    </ul>

  )
}

export default calendarList;