import React, { useContext } from 'react';
import { CurrentUserContext } from '../../index.js';
import Statistics from './statistics.js';

function statWrapper(props) {
  const user = useContext(CurrentUserContext);
  console.log(CurrentUserContext)
  return(
    <>
      <Statistics user_id={user.user.user_id}/>
    </>
  )
}

export default statWrapper;