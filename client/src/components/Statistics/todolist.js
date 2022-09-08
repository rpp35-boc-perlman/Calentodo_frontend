import React from 'react';
import SingleTodo from './singleTodo';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    //have todos stored here and render to page
    this.state = {}
  }

  render() {
    return (
      <Grid item xs={10} md={2} sx={{ height: '100%' , padding: 3, display: 'flex', flexDirection: 'column' }}>
          <h3>Todos</h3>
        <Container disableGutters={true} sx={{ borderRadius: {xs:1, md:0} , backgroundColor: '#234E7C', padding: 3 }}>
          {this.props.todos.map((todo) => {
            return (<SingleTodo checkHandler={this.props.checkHandler} key={todo.todo_id} todo={todo} />)
          })}
          {/* render all todos here using the singleTodo component */}
        </Container>
      </Grid>
    )
  }
}

export default TodoList;