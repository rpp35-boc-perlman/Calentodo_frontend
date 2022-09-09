import React, { useContext } from 'react';
import { CurrentUserContext } from '../../index.js';
import Statistics from './statistics.js';
import Box from '@mui/material/Box';

function statWrapper(props) {

  const {user} = useContext(CurrentUserContext);
  var user_id = null;
  if (user) {
    user_id = user.user_id
  }

  return(
    <Box sx={{ width: '100vw', height: '100vh'}}>
      <Statistics user_id={user_id}/>
    </Box>
  )
}

export default statWrapper;