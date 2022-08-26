import React from 'react';

class singleTodo extends React.Component {
  render() {
    return (
      <div key={this.props.todo.todo_id}>
        {/* checkbox */}
        <input type="checkbox"></input>
        {/* title of the todo */}
        <div className="todoTitle">{this.props.todo.title}</div>
        {/* small box with the corresponding todo color */}
        <div></div>
      </div>
    )
  }
}

export default singleTodo;