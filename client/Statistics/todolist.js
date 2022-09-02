import React from 'react';
import SingleTodo from './singleTodo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    //have todos stored here and render to page
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => {
          return (<SingleTodo checkHandler={this.props.checkHandler} key={todo.todo_id} todo={todo} />)
        })}
        {/* render all todos here using the singleTodo component */}
      </div>
    )
  }
}

export default TodoList;