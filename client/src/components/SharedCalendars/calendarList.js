import React from 'react';
import CalendarItem from './calendarItem';

const calendarList = ({users, handleOnChange, checkedState}) => {
  return (
    <ul >
      {users.map((user, index) => (

        <CalendarItem user={user}
        handleOnChange={handleOnChange}
        checkedState={checkedState}
        index={index}/>
      ))}

    </ul>

  )
}

export default calendarList;