import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Box, Grid, Toolbar, Typography, IconButton } from '@mui/material';
import axios from 'axios';

import Display from './Display.jsx';
import PendingDisplay from './PendingDisplay.jsx';
import EditModal from '../../edit_modal/edit.jsx';

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
        <Box sx={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          backgroundColor: '#172B80'}}
        >
          {this.state.seen && <EditModal setSeen={()=>{this.setSeen()}} currentItem={this.state.currentItem}/>}
          <Display status="Late" refresh={this.refresh.bind(this)} maxHeight={'20vh'} setSeen={this.setSeen}></Display>
          <Display status="Active" refresh={this.refresh.bind(this)} maxHeight={'20vh'} setSeen={this.setSeen}></Display>
          <PendingDisplay status="Pending" refresh={this.refresh.bind(this)} maxHeight={'50vh'} setSeen={this.setSeen}></PendingDisplay>
        </Box>

      </div>
    )
  }
}

export default Main