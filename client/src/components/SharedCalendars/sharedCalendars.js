import React from 'react';
import CalendarList from './calendarList';
import axios from 'axios';

class SharedCalendars extends React.Component {
  constructor(props) {
    super(props);
    // dummy testing data
    this.state = {

      users: [
        // {
        //   "user_id": 9,
        //   "user_email": "tyrone@test.com",
        //   "todos": [
        //     {
        //       "todo_id": 3,
        //       "start_date": "2001-08-27T00:00:00.000Z",
        //       "end_date": "2001-08-29T00:00:00.000Z",
        //       "todo_body": "Think about life",
        //       "category": null,
        //       "status": "pending",
        //       "user_id": 9
        //     },
        //     {
        //       "todo_id": 2,
        //       "start_date": "2001-08-25T00:00:00.000Z",
        //       "end_date": "2001-08-28T00:00:00.000Z",
        //       "todo_body": "GO VACUUM",
        //       "category": null,
        //       "status": "pending",
        //       "user_id": 9
        //     },
        //     {
        //       "todo_id": 4,
        //       "start_date": "2022-08-27T20:00:00.000Z",
        //       "end_date": "2022-08-27T22:00:00.000Z",
        //       "todo_body": "Movie Night",
        //       "category": null,
        //       "status": "pending",
        //       "user_id": 9
        //     }
        //   ]
        // },
        // {
        //   "user_id": 13,
        //   "user_email": "me@test.com"
        // }
      ],
      visibleUsers: [],
      checkedState: []
    }
    this.handleOnChange = this.handleOnChange.bind(this);

  }

  componentDidMount() {
    const config = {
      url: '/api/',
      method: 'get',
      headers: {
        target: 'http://ec2-34-205-69-211.compute-1.amazonaws.com/users/9'
      }
    }
    axios(config)
    .then(res => {
      for (var user of res.data.users) {
        user.isVisible = false;
      }
      this.setState({
        users: res.data.users
      },() => console.log(this.state.users, 'users'))
    })
    .catch((err) => {
      console.error(err)
    }
    )
    this.setState({
      checkedState: new Array(this.state.users.length).fill(false)
    })
  }

  handleOnChange(position) {
    console.log('clicked')
    const updatedCheckedState = this.state.checkedState.map((item, index) =>
      index === position ? !item : item
    );
    const users = [...this.state.users]
    var user = users[position]
    user.isVisible = !user.isVisible
    this.setState({
      checkedState: updatedCheckedState,
      users: users
    },() => console.log(this.state.users))
  }



  render() {
    return(
      <>
        <CalendarList users={this.state.users}
        handleOnChange={this.handleOnChange}
        checkedState={this.state.checkedState}
        />
      </>
    )
  }

}

export default SharedCalendars;