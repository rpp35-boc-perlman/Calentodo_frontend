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

  refresh() {
    this.forceUpdate();
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
          <Display status="Late" refresh={this.refresh.bind(this)} maxHeight={'20vh'} setSeen={this.props.setSeen}></Display>
          <Display status="Active" refresh={this.refresh.bind(this)} maxHeight={'20vh'} setSeen={this.props.setSeen}></Display>
          <PendingDisplay status="Pending" refresh={this.refresh.bind(this)} maxHeight={'50vh'} setSeen={this.props.setSeen}></PendingDisplay>
        </Box>

      </div>
    )
  }
}

export default Main