import React from 'react';
import ChartView from './chartView.js';
import TodoList from './todolist.js';
import Navigation from '../Navigation/navigation.js';



class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //a user id to retrieve the proper todos
      userId: 9,
      //all todos retrieved each time the tab is opened
      todos: [{
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
        <ChartView activeTodos={this.state.activeTodos}/>
        <TodoList checkHandler={this.checkHandler} todos={this.state.todos}/>
      </div>
    )
  }
}

export default Statistics;