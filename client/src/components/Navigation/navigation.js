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


export default function navigation() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  }

  return (
  <div>
    <React.Fragment key="left">
      <Button onClick={toggleDrawer(true)} variant="contained" size="small">
        <MenuIcon />
      </Button>
      <Drawer
      anchor="left"
      open={state.left}
      onClose={toggleDrawer(false)}
      PaperProps={{ sx:{ bgcolor: 'darkblue', color: 'white' } }}
      children={
        <Box
        sx={{
          width: 200
        }}>
          <nav className="navbar">
              <div className="bug"><UserBug /></div>
              <div className="nav-link"><NavLink className="navlink" to="/">Home</NavLink></div>
              <div className="nav-link"><NavLink className="navlink" to="/login">Login</NavLink></div>
              <div className="nav-link"><NavLink className="navlink" to="/todo">Todos</NavLink></div>
              <div className="nav-link"><NavLink className="navlink" to="/calendar">Calendar</NavLink></div>
              <div className="nav-link"><NavLink className="navlink" to="/statistics">Statistics</NavLink></div>
          </nav>
        </Box>
      }
      >
      </Drawer>
    </React.Fragment>
  </div>)
}