import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import axios from 'axios';
import Draggable from 'react-draggable';

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

var TodoItem = ({todo_id, todo_body, start_date, end_date, category, refresh, setSeen}) => {
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
  } else {
    categoryElement = <Box sx={{...categoryStyle, backgroundColor:'#923FD7'}}>
      <Typography>Not Categorized</Typography>
    </Box>
  }

  function handleStop(e) {
    console.log(e.toElement.id);
    if (e.toElement.id === 'addToCalendar') {
      console.log('handling stop', todo_id);
      axios.put(`http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos/activate/${todo_id}`)
        .then(response => refresh())
        .catch(err => console.log(err));
    } else if (e.toElement.id === 'markAsComplete') {
      axios.put(`http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos/done/${todo_id}`)
        .then(response => refresh())
        .catch(err => console.log(err));
    }
  }

  return (
    <ThemeProvider theme={theme}>

      <Draggable
        onStop={handleStop}
      >
        <Box id={'todoItem'} sx={{
          display: 'flex',
          width: '50vw',
          marginBottom: '20px',
          borderRadius: '5px',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#944742'}}
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
                onClick={()=>setSeen(todo_id, todo_body, start_date, end_date, category)}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
          {categoryElement}
        </Box>
      </Draggable>
    </ThemeProvider>
  )
}

export default TodoItem