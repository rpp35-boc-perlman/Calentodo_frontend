import { NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import UserBug from '../loginForm/UserBug.js'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import {Fab, Typography} from '@mui/material';
// for some reason the icons need to be imported individually
import NavigationIcon from '@mui/icons-material/Navigation';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import OfflineShareIcon from '@mui/icons-material/OfflineShare';

export default function navigation() {

  const [state, setState] = React.useState({
    left: false
  });

  const [expand, setExpand] = React.useState(false)

  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  }

  return (
    <React.Fragment key="left">
      {/* old button */}
      {/* <Button onClick={toggleDrawer(true)} variant="contained" size="small">
        <MenuIcon />
      </Button> */}
      {/* floating action button */}
      <Fab
        onClick={toggleDrawer(true)}
        onMouseEnter={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
        aria-label="Menu Button"
        variant="extended"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          left: !expand ? '-22em' : '-8em',
          // get button out fo the corner a little
          textAlign: 'right',
          width: '300px',
          margin: '3em 1em',
          transition: '.4s ease-in-out',
        }}
      >
        <Typography variant='h5'>
          Menu
        </Typography>
        <NavigationIcon
          fontSize='large'
          sx={{
            transform: 'rotate(90deg)',
          }}
        />
      </Fab>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx:{ bgcolor: 'darkGrey', color: 'black' } }}
        children={
        <Box
        sx={{
          width: 200
        }}>
          <nav className="navbar">
              <UserBug />
              {/* side note: navlink should be its own component for how much it is repeated, but I was lazy */}
              {/* todo link */}
              <NavLink className="nav-link" to="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: "1em",
                  width: '100%',
                  color: '1e1e1e',
                  textDecoration: 'none',
                }}
              >
                <Typography variant="h6" sx={{color: 'black'}}>
                    Todo Lists
                </Typography>
                <ListAltIcon fontSize="large" sx={{color: 'black'}} />
              </NavLink>
              {/* Calendar */}
              <NavLink className="nav-link" to="/calendar"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: "1em",
                  width: '100%',
                  color: '1e1e1e',
                  textDecoration: 'none',
                }}
              >
                <Typography variant="h6"  sx={{color: 'black'}}>
                    Calendar
                </Typography>
                <CalendarMonthIcon fontSize="large"   sx={{color: 'black'}}/>
              </NavLink>
              {/* Stats */}
              <NavLink className="nav-link" to="/statistics"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: "1em",
                  width: '100%',
                  color: '1e1e1e',
                  textDecoration: 'none',
                }}
              >
                <Typography variant="h6"  sx={{color: 'black'}}>
                    Statistics
                </Typography>
                <EqualizerIcon fontSize="large"   sx={{color: 'black'}}/>
              </NavLink>
              {/* shared calendars */}
              <NavLink className="nav-link" to="/sharedCalendars"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: "1em",
                  width: '100%',
                  color: '1e1e1e',
                  textDecoration: 'none',
                }}
              >
                <Typography variant="h6"  sx={{color: 'black'}}>
                    Shared Calendars
                </Typography>
                <OfflineShareIcon fontSize="large"  sx={{color: 'black'}} />
              </NavLink>

              {/* old links for reference */}
              {/* <div className="nav-link"><NavLink className="navlink" to="/todo">Todos</NavLink></div> */}
              {/* <div className="nav-link"><NavLink className="navlink" to="/calendar">Calendar</NavLink></div> */}
              {/* <div className="nav-link"><NavLink className="navlink" to="/sharedCalendars">Shared Calendars</NavLink></div> */}
              {/* <div className="nav-link"><NavLink className="navlink" to="/statistics">Statistics</NavLink></div> */}
          </nav>
        </Box>
      }
      />
    </React.Fragment>
  )
}