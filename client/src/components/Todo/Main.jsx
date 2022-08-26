import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Box, Grid, Toolbar, Typography, IconButton } from '@mui/material';
import axios from 'axios';

import Display from './Display.jsx';
import PendingDisplay from './PendingDisplay.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      late: [],
      active: [],
      pending: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="Todo">
        <Box sx={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          backgroundColor: '#172B80'}}
        >
          
          <Display status="Late" maxHeight={'20vh'}></Display>
          <Display status="Active" maxHeight={'20vh'}></Display>
          <PendingDisplay status="Pending" maxHeight={'50vh'}></PendingDisplay>
        </Box>
        
      </div>
    )
  }
}

export default Main