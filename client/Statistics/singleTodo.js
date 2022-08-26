import React from 'react';

class singleTodo extends React.Component {
  render() {
    return (
      <div>
        {/* checkbox */}
        <input type="checkbox"></input>
        {/* title of the todo */}
        <div class="todoTitle">{this.props.todo.title}</div>
        {/* small box with the corresponding todo color */}
        <div></div>
      </div>
    )
  }
}