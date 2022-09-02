import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';

import LateDisplay from './LateDisplay.jsx';
import ActiveDisplay from './ActiveDisplay.jsx';
import PendingDisplay from './PendingDisplay.jsx';
import EditModal from '../../edit_modal/edit.jsx';
import Navigation from '../Navigation/navigation.js'

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
    gray: {
      main: '#C2D6D1'
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
      pending: [],
      seen: false
    };
    this.setSeen = this.setSeen.bind(this);
  }

  refresh() {
    this.forceUpdate();
  }

  setSeen (todo_id, todo_body, start_date, end_date, category) {
    if([...arguments].length) {
      this.setState({currentItem: [...arguments]})
    }
    this.setState({seen: !this.state.seen});
  }

  render() {
    return (
      <div id="Todo">
        <ThemeProvider theme={theme}>
          <Navigation />
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            backgroundColor: '#172B80'}}
          >
            <Typography variant="white">To-Do List</Typography>
            <Button color="gray" variant="contained" aria-label="add to-do" style={{width: '30%', marginBottom: '5px'}} onClick={() => console.log('Add clicked')}>
              <AddCircleOutlineIcon className="add_icon"/>
            </Button>
            {this.state.seen && <EditModal setSeen={()=>{this.setSeen()}} currentItem={this.state.currentItem}/>}
            <LateDisplay refresh={this.refresh.bind(this)} maxHeight={'20vh'} setSeen={this.setSeen}></LateDisplay>
            <ActiveDisplay refresh={this.refresh.bind(this)} maxHeight={'20vh'} setSeen={this.setSeen}></ActiveDisplay>
            <PendingDisplay refresh={this.refresh.bind(this)} maxHeight={'40vh'} setSeen={this.setSeen}></PendingDisplay>
          </Box>
        </ThemeProvider>
      </div>
    )
  }
}

export default Main