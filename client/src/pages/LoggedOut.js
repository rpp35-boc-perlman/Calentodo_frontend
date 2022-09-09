import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navigation from '../components/Navigation/navigation.js'

export default function LoggedOut (props) {

    const navigate = useNavigate();
    setTimeout(() => {
      navigate('/', {replace: true})
    }, 5000);

    return(
        <div>
          <h5>You have been logged out</h5>
          <Navigation />
        </div>
    )
}
