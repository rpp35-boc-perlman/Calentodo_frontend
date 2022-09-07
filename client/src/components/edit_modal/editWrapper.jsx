import React, { useContext } from 'react';
import { CurrentUserContext } from '../../index.js';
import EditModal from './edit.jsx';

function EditWrapper(props) {
  const user = useContext(CurrentUserContext);
  console.log(CurrentUserContext)
  return(
    <>
      <EditModal user_id={user.user.user_id}/>
    </>
  )
}

export default EditWrapper;