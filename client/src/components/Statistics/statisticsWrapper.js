import React, { useContext } from 'react';
import { CurrentUserContext } from '../../index.js';
import Statistics from './statistics.js';

function statWrapper(props) {

  const {user} = useContext(CurrentUserContext);
  var user_id = null;
  if (user) {
    user_id = user.user_id
  }

  return(
    <>
      <Statistics user_id={user_id}/>
    </>
  )
}

export default statWrapper;