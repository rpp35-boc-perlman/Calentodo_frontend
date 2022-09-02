import React from 'react';
import calendarList from './calendarList';


class SharedCalendars extends React.Component {
  constructor(props) {
    super(props);
    // dummy testing data
    this.state = {

      "users": [
        {
          "user_id": 9,
          "user_email": "tyrone@test.com",
          "todos": [
            {
              "todo_id": 3,
              "start_date": "2001-08-27T00:00:00.000Z",
              "end_date": "2001-08-29T00:00:00.000Z",
              "todo_body": "Think about life",
              "category": null,
              "status": "pending",
              "user_id": 9
            },
            {
              "todo_id": 2,
              "start_date": "2001-08-25T00:00:00.000Z",
              "end_date": "2001-08-28T00:00:00.000Z",
              "todo_body": "GO VACUUM",
              "category": null,
              "status": "pending",
              "user_id": 9
            },
            {
              "todo_id": 4,
              "start_date": "2022-08-27T20:00:00.000Z",
              "end_date": "2022-08-27T22:00:00.000Z",
              "todo_body": "Movie Night",
              "category": null,
              "status": "pending",
              "user_id": 9
            }
          ]
        },
        {
          "user_id": 13,
          "user_email": "me@test.com"
        }
      ]
    }

  }

  render() {
    return(
      <>
        <calendarList/>
      </>
    )
  }

}

export default SharedCalendars;