import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar, Typography, Paper } from '@mui/material';
import axios from 'axios';

import TodoItem from './TodoItem.jsx';

const theme = createTheme({
  typography: {
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
    axios.get('http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos')
      .then(response => {
        let data = response.data;
        for (let todo of data) {
          if (todo.status === props.status.toLowerCase()) {
            newTodos.push(todo);
          }
        }
        
        if (newTodos.length !== todos.length) {
          setTodos(newTodos);
        }
      });
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
          overflowY: 'auto',
          overflowX: 'hidden',
          width: '65vw',
          alignItems: 'center',
          marginBottom: '10px',
          flexDirection: 'column',
          backgroundColor: '#161B2E',}}
        >
          {todos.map((todo, idx) => {
            return <TodoItem key={idx} todo_id={todo.todo_id} todo_body={todo.todo_body} 
              start_date={todo.start_date} end_date={todo.end_date} category={todo.category} refresh={() => props.refresh()}/>
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