import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar, Typography, Paper } from '@mui/material';
import axios from 'axios';
import Draggable from 'react-draggable';

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
});

var Display = (props) => {
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
        height: props.maxHeight,
        maxHeight: props.maxHeight,
        overflow: 'auto',
        width: '70vw',
        alignItems: 'center',
        marginBottom: '10px',
        flexDirection: 'column',
        backgroundColor: '#161B2E',}}
      >
        {todos.map((todo, idx) => {
          return <Draggable>
              <TodoItem key={idx} description={todo.description} start={todo.start} duration={todo.duration} category={todo.category} status={todo.status}/>
            </Draggable>
        })}
      </Box>
    </ThemeProvider>
  )
}

export default Display