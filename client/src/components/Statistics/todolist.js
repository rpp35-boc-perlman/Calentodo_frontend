import React from 'react';
import SingleTodo from './singleTodo';
import Grid from '@mui/material/Grid';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    //have todos stored here and render to page
    this.state = {}
  }

  render() {
    return (
      <Grid item xs={2}>
        {this.props.todos.map((todo) => {
          return (<SingleTodo checkHandler={this.props.checkHandler} key={todo.todo_id} todo={todo} />)
        })}
        {/* render all todos here using the singleTodo component */}
      </Grid>
    )
  }
}

export default TodoList;