import React from 'react';
import ChartView from './chartView.js';
import TodoList from './todolist.js';
import Navigation from '../Navigation/navigation.js';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //a user id to retrieve the proper todos
      userId: 9,
      //all todos retrieved each time the tab is opened
      todos: [],
      //an array for active(displayed and rendered) todos
      activeTodos: []
    }
    this.checkHandler = this.checkHandler.bind(this);
  }


  componentDidMount() {
    //when the component mounts request the todos using the user id and place them in state
    axios({
      method: 'get',
      url: 'http://52.8.24.123:3000/statistics',
      //headers: {
      //  target: 'http://52.8.24.123:3000/statistics'
      //}
      params: {
        user_id: this.state.userId
      }
    })
      .then((todos) => {
        this.setState({
          todos: todos.data
        })
      })
  }

  checkHandler(e) {
    //event listener
      //get todo id
      var todos = this.state.todos;
      var id = parseInt(e.target.id);
      var checked = e.target.checked;
      //if box is set to true(checked), place a copy of the todo in the active array, if false remove the copy
      if(checked) {
        //loop over the todos and find the selected todo
          //once found place a copy in active todos
        this.setState((state, props) => {
          var newActives = [...state.activeTodos];
          for(var i = 0; i < todos.length; i++) {
            if(todos[i].todo_id === id) {
              newActives.push(todos[i]);
              return {activeTodos: newActives};
            }
          }
        })
      } else {
        this.setState((state, props) => {
          var newActives = [...state.activeTodos];
          for(var i = 0; i < newActives.length; i++) {
            if(newActives[i].todo_id === id) {
              newActives.splice(i, 1);
              return {activeTodos: newActives}
            }
          }
        })
      }
  }

  render () {
    return (
      <div>
        {/* pass the active array to chartview as props */}
        <Navigation />
        <Grid container spacing={0} sx={{ display: 'flex', justifyContent: {xs:'center', md:'flex-start'} }}>
          <ChartView activeTodos={this.state.activeTodos}/>
          <TodoList checkHandler={this.checkHandler} todos={this.state.todos}/>
        </Grid>
      </div>
    )
  }
}

export default Statistics;