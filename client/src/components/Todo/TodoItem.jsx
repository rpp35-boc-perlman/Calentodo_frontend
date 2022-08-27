import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
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
  }
});

var TodoItem = ({todo_id, todo_body, start_date, end_date, category, refresh}) => {
  const paperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2c2d6',
    paddingLeft: 3,
    paddingRight: 3
  };

  let categoryStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '50vw',
    borderRadius: '5px',
    marginTop: '15px',
    justifyContent: 'center',
    backgroundColor: '#E64510'
  };


  let categoryElement;
  if (category === 'category1') {
    categoryElement = <Box sx={{...categoryStyle, backgroundColor:'#E64510'}}>
      <Typography>{category}</Typography>
    </Box>
  } else if (category == 'category2') {
    categoryElement = <Box sx={{...categoryStyle, backgroundColor:'#46E610'}}>
      <Typography>{category}</Typography>
    </Box>
  }
  
  function handleStop(e) {
    if (e.toElement.id === 'addToCalendar') {
      console.log('handling stop', todo_id);
      axios.put(`http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos/activate/${todo_id}`)
        .then(response => refresh())
        .catch(err => console.log(err));
    } else if (e.toElement.id = 'markAsComplete') {
      axios.put(`http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos/done/${todo_id}`)
        .then(response => refresh())
        .catch(err => console.log(err));
    }
  }

  return (
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
          <Grid container rowSpacing={6} columnSpacing={2}>
            <Grid item xs={12} md={12}>
              <Paper sx={{...paperStyle, height: '300%'}}>
                <Typography>{todo_body}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={5} md={5}>
              <Paper sx={paperStyle}>
                <Typography>Start: {start_date}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={5} md={5}>
              <Paper sx={paperStyle}>
                <Typography>End: {end_date}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} md={2}>
              <Button 
                style={{height: '20px'}}
                variant="contained"
                color="green"
                onClick={() => console.log('edit clicked')}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
          {categoryElement}
        </Box>
      </Draggable>
  )
}

export default TodoItem