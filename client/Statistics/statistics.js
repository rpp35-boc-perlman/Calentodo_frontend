import React from 'react';
import ChartView from './chartView.js';
import TodoList from './todolist.js';
import axios from 'axios';


class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //a user id to retrieve the proper todos
      userId: 9,
      //all todos retrieved each time the tab is opened
      todos: [ {
        "todo_id": 2,
        "start_date": "2001-08-25T07:00:00.000Z",
        "end_date": "2001-08-28T07:00:00.000Z",
        "todo_body": "GO VACUUM",
        "category": null
      },
      {
        "todo_id": 3,
        "start_date": "2001-08-27T07:00:00.000Z",
        "end_date": "2001-08-29T07:00:00.000Z",
        "todo_body": "Think about life",
        "category": null
      },
      {
        "todo_id": 4,
        "start_date": "2022-08-28T03:00:00.000Z",
        "end_date": "2022-08-28T05:00:00.000Z",
        "todo_body": "Movie Night",
        "category": null
      }],
      //an array for inactive(not displayed) todos
      inactiveTodos: [],
      //an array for active(displayed and rendered) todos
      activeTodos: [
        // {
        //   "todo_id": 2,
        //   "start_date": "2001-08-25T07:00:00.000Z",
        //   "end_date": "2001-08-28T07:00:00.000Z",
        //   "todo_body": "GO VACUUM",
        //   "category": null
        // },
        // {
        //   "todo_id": 3,
        //   "start_date": "2001-08-27T07:00:00.000Z",
        //   "end_date": "2001-08-29T07:00:00.000Z",
        //   "todo_body": "Think about life",
        //   "category": null
        // },
        // {
        //   "todo_id": 4,
        //   "start_date": "2022-08-28T03:00:00.000Z",
        //   "end_date": "2022-08-28T05:00:00.000Z",
        //   "todo_body": "Movie Night",
        //   "category": null
        // }
      ]
    }
    this.checkHandler = this.checkHandler.bind(this);
  }

  //dummy data
//  [
//   {
//     "todo_id": 2,
//     "start_date": "2001-08-25T07:00:00.000Z",
//     "end_date": "2001-08-28T07:00:00.000Z",
//     "todo_body": "GO VACUUM",
//     "category": null
//   },
//   {
//     "todo_id": 3,
//     "start_date": "2001-08-27T07:00:00.000Z",
//     "end_date": "2001-08-29T07:00:00.000Z",
//     "todo_body": "Think about life",
//     "category": null
//   },
//   {
//     "todo_id": 4,
//     "start_date": "2022-08-28T03:00:00.000Z",
//     "end_date": "2022-08-28T05:00:00.000Z",
//     "todo_body": "Movie Night",
//     "category": null
//   }
// ]

  componentDidMount() {
    //when the component mounts request the todos using the user id and place them in state
    // axios({
    //   method: get,
    //   url: ''
    //   data: {
    //     userId: this.state.userId
    //   }
    // })
    //   .then((todos) => {
    //     //make todos the proper format
    //     this.setState({
    //       inactiveTodos: todos
    //     })
    //   })
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
        <ChartView activeTodos={this.state.activeTodos}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default Statistics;