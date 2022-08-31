import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

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
      <Button onClick={toggleDrawer(true)} variant="outlined" size="small">
        <MenuIcon />
      </Button>
      <Drawer
      anchor="left"
      open={state.left}
      onClose={toggleDrawer(false)}
      >
        <nav className="navbar">
            <div className="nav-link"><Link to="/">Home</Link></div>
            <div className="nav-link"><Link to="/todo">Todos</Link></div>
            <div className="nav-link"><Link to="/statistics">Statistics</Link></div>
        </nav>
      </Drawer>
    </React.Fragment>
  </div>)
}