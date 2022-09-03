import React from 'react';

const CalendarItem = ({user, handleOnChange,checkedState, index}) => {
  return (


    <li>
      <input
        type="checkbox"
        name={user.user_email}
        value={user.user_email}
        checked={checkedState[index]}
        onChange={() => handleOnChange(index)}
      />
      <span>   {user.user_email}</span>

    </li>
  )
}

export default CalendarItem;