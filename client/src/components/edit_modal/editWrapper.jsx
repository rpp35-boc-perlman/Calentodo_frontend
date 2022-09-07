import React, { useContext } from 'react';
import { CurrentUserContext } from '../../index.js';
import EditModal from './edit.jsx';

function EditWrapper(props) {
  const user = useContext(CurrentUserContext);
  return(
    <>
      <EditModal user_id={user.user.user_id} setSeen={props.setSeen} currentItem={props.currentItem} addButton={props.addButton} refresh={props.refresh}/>
    </>
  )
}

export default EditWrapper;