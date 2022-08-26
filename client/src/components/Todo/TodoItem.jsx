import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar, Typography, Paper } from '@mui/material';
import axios from 'axios';
import Draggable from 'react-draggable';

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: 'Raleway, Arial',
    fontSize: 12,
    black: {
      color: 'black',
      fontSize: 20,
    }
  },
});

var TodoItem = ({description, start, duration, category, status}) => {
  const paperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2c2d6',
    paddingLeft: 3,
    paddingRight: 3,
    '&:hover': {
      backgroundColor: '#8585ad',
      opacity: [0.9, 0.8, 0.7],
    },
  };

  let categoryStyle1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E64510',
    paddingLeft: 3,
    paddingRight: 3
  };

  let categoryStyle2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#46E610',
    paddingLeft: 3,
    paddingRight: 3
  };

  let categoryElement;
  if (category === 'category1') {
    categoryElement = <Box sx={categoryStyle1}>
      <Typography>{category}</Typography>
    </Box>
  } else if (category == 'category2') {
    categoryElement = <Box sx={categoryStyle2}>
      <Typography>{category}</Typography>
    </Box>
  }
  
  function handleStop(e) {
    if (e.toElement.id === 'addToCalendar') {
      console.log('handling stop', e.toElement.id);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Draggable
        onStop={handleStop}
      >
        <Box sx={{
          display: 'flex',
          width: '50vw',
          margin: '5px',
          borderRadius: '5px',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#944742',}}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <Paper sx={paperStyle}>
                <Typography>{description}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={5} md={5}>
              <Paper sx={paperStyle}>
                <Typography>Start: {start}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={5} md={5}>
              <Paper sx={paperStyle}>
                <Typography>Duration: {duration}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} md={2}>
              <button>Edit</button>
            </Grid>
            <Grid item xs={12} md={12}>
              {categoryElement}
            </Grid>
          </Grid>
        </Box>
      </Draggable>
    </ThemeProvider>
  )
}

export default TodoItem