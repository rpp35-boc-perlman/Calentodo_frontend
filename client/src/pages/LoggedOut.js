import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import Navig   ation from '../components/Navigation/navigation.js'
import {Box, Typography, Paper} from '@mui/material'
import backgroundSVG from '../svg/liquid-cheese.svg';

export default function LoggedOut (props) {
    const [count, setcount] = useState(5)
    // use navigate must be called in the component body
    const navigate = useNavigate();

    // redirect after 5 seconds
    setTimeout(() => {
      navigate('/', {replace: true})
    }, 5000);

    // run the timer for the visial countdown
    setInterval(() => {
      setcount(count - 1)
    }, 1000);

    return(
        <Box sx={{
          height: '100vh',
          display: 'grid',
          placeItems: 'center',
          backgroundImage: `url(${backgroundSVG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          {/* navigation is not really needed here */}
          {/* <Navigation /> */}
          <Paper
            elecation={3}
            sx={{
              marginTop: '5em',
              padding: '2em',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '2em'
            }}
          >
            <Typography varian="h1" fontSize="large">You have been logged out, Goodbye.</Typography>
            <Box sx={{
              textAlign: 'center',
            }}>
              <Typography varian="h5">You will be redirected to the home page in {count} seconds.</Typography>
              <Typography varian="subtitle1">Click <Link to="/">here</Link> to go to the home page now.</Typography>
            </Box>
          </Paper>
        </Box>
    )
}
