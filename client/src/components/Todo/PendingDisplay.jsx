import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar, Typography, Paper } from '@mui/material';
import axios from 'axios';

import data from './sampleData.js';
import TodoItem from './TodoItem.jsx';

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: 'Raleway, Arial',
    fontSize: 12,
    white: {
      color: 'white',
      fontSize: 40,
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


var PendingDisplay = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let newTodos = [];
    for (let todo of data) {
      if (todo.status === props.status.toLowerCase()) {
        newTodos.push(todo);
      }
    }
    
    if (newTodos.length !== todos.length) {
      setTodos(newTodos);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{backgroundColor: '#161B2E', width: '70vw', textAlign: "center", zIndex: '10'}}>
        <Typography variant="white">
          {props.status}
        </Typography>
      </Paper>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Box sx={{
          display: 'flex',
          position: 'relative',
          height: props.maxHeight,
          maxHeight: props.maxHeight,
          overflow: 'auto',
          width: '65vw',
          alignItems: 'center',
          marginBottom: '10px',
          flexDirection: 'column',
          backgroundColor: '#161B2E',}}
        >
          {todos.map((todo, idx) => {
            return <TodoItem key={idx} description={todo.description} start={todo.start} duration={todo.duration} category={todo.category} status={todo.status}/>
          })}
        </Box>
        <Box id={'addToCalendar'} sx={{
          display: 'flex',
          backgroundColor: '#00FF00',
          width: '5vw',
        }}>
          <Typography id="vertical">ADD TO CALENDAR</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default PendingDisplay