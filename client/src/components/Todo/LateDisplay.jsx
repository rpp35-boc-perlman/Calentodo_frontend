import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar, Typography, Paper } from '@mui/material';
import axios from 'axios';

import TodoItem from './TodoItem.jsx';

var LateDisplay = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let newTodos = [];
    axios.get('http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos')
      .then(response => {
        let data = response.data;
        for (let todo of data) {
          if (todo.status === 'late') {
            newTodos.push(todo);
          }
        }
        
        if (newTodos.length !== todos.length) {
          setTodos(newTodos);
        }
      });
  });

  return (
    <>
      <Paper sx={{backgroundColor: '#F94504', width: '70vw', textAlign: "center", zIndex: '10'}}>
        <Typography variant="smallWhite">
          Late
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
        <Box id={'markAsComplete'} sx={{
          display: 'flex',
          backgroundColor: '#278A06',
          width: '5vw',
          height: props.maxHeight,
          maxHeight: props.maxHeight,
        }}>
          <Typography id="vertical" variant="xsmallWhite" sx={{display: 'flex'}}>Mark As Complete</Typography>
        </Box>
      </Box>
    </>
  )
}

export default LateDisplay;