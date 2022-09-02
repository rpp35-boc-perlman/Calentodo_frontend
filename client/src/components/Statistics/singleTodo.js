import React from 'react';
import Box from '@mui/material/Box'

class singleTodo extends React.Component {
  render() {
    return (
      <Box>
        {/* checkbox */}
        <input type="checkbox" onChange={this.props.checkHandler} key={this.props.todo.todo_id + "_check"} id={this.props.todo.todo_id}></input>
        {/* title of the todo */}
        <span className="todoBody" key={this.props.todo.todo_id + "_body"}>{this.props.todo.todo_body}</span>
        {/* small box with the corresponding todo color */}
        <div key={this.props.todo.todo_id + "_color"}></div>
      </Box>
    )
  }
}

export default singleTodo;