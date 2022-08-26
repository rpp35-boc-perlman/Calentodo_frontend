import React from 'react';
import ChartView from './chartView.js';
import TodoList from './todolist.js';
import axios from 'axios';


class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //a user id to retrieve the proper todos
      userId: 0,
      //all todos retrieved each time the tab is opened
      todos: [],
      //an array for inactive(not displayed) todos
      inactiveTodos: [],
      //an array for active(displayed and rendered) todos
      activeTodos: []
    }
    this.checkHandler = this.checkHandler.bind(this);
  }

  componentDidMount() {
    //when the component mounts request the todos using the user id and place them in state
    axios({
      method: get,
      url: ''
      data: {
        userId: this.state.userId
      }
    })
      .then((todos) => {
        //make todos the proper format
        this.setState({
          inactiveTodos: todos
        })
      })
  }

  checkHandler(e) {
    //event listener
      //get todo id
      //if box is set to true(checked), find the todo in the inactive array, and if set to unchecked find in active array
      //push the todo into the array matching the new state of the checkbox checked(active) unchecked(inactive)
  }

  render () {
    return (
      <div>
        {/* pass the active array to chartview as props */}
        <ChartView activeTodos=''/>
        <TodoList todos=''/>
      </div>
    )
  }
}

export default Statistics;