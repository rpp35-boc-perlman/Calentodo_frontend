import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Box, Grid, Toolbar, Typography, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import LateDisplay from './LateDisplay.jsx';
import ActiveDisplay from './ActiveDisplay.jsx';
import PendingDisplay from './PendingDisplay.jsx';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 12,
    white: {
      color: 'white',
      fontSize: 40,
    },
    smallWhite: {
      color: 'white',
      fontSize: 30,
    },
    xsmallWhite: {
      color: 'white',
      fontSize: 20,
    }
  },
  palette: {
    green: {
      main: '#3EAA1A'
    },
    category1: {
      main: '#3EAA1A'
    }
  }
});

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
        <ThemeProvider theme={theme}>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            backgroundColor: '#172B80'}}
          >  
            <Typography variant="white">To-Do List</Typography>
            <LateDisplay refresh={this.refresh.bind(this)} maxHeight={'20vh'}></LateDisplay>
            <ActiveDisplay refresh={this.refresh.bind(this)} maxHeight={'20vh'}></ActiveDisplay>
            <PendingDisplay refresh={this.refresh.bind(this)} maxHeight={'40vh'}></PendingDisplay>
          </Box>
        </ThemeProvider>
      </div>
    )
  }
}

export default Main