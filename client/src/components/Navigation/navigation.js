// import { Link } from 'react-router-dom';
// import React from 'react';
// import axios from 'axios';

// export default function navigation() {
//   return (<div>
//     <nav className="navbar">
//       <Link className="link" to="/">Home</Link>
//       <Link className="link" to="/todo">Todos</Link>
//       <Link className="link" to="/statistics">Statistics</Link>
//     </nav>
//   </div>)
// }

import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  let link = {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  };
  
  let logo = {
    flexGrow: "1",
    cursor: "pointer",
  };

  let navlinks = {
    marginLeft: "10px",
    display: "flex",
  };

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" sx={logo}>
          <Link to="/" style={link}>
            Home
          </Link>
        </Typography>
          <div >
            <Link to="/todo" style={link}>
              Todos
            </Link>
            <Link to="/statistics" style={link}>
              Statistics
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
