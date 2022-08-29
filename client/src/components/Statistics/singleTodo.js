import React from 'react';

class singleTodo extends React.Component {
  render() {
    return (
      <>
        {/* checkbox */}
        <input type="checkbox" onChange={this.props.checkHandler} key={this.props.todo.todo_id + "_check"} id={this.props.todo.todo_id}></input>
        {/* title of the todo */}
        <div className="todoBody" key={this.props.todo.todo_id + "_body"}>{this.props.todo.todo_body}</div>
        {/* small box with the corresponding todo color */}
        <div key={this.props.todo.todo_id + "_color"}></div>
      </>
    )
  }
}

export default singleTodo;