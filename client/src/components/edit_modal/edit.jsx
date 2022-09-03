import React from 'react';
import axios from 'axios';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Description: '',
      Category: '',
      StartTime: '',
      StartDate: '',
      EndTime: '',
      EndDate: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.name
    this.setState({[value]: event.target.value});
  }

  handleSubmit(event) {
    if (this.props.addButton) {
      axios.post(`http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos/add?userId=9`, {
        todoObj: {
          Description: this.state.Description,
          Category: this.state.Category,
          StartTime: this.state.StartTime,
          StartDate: this.state.StartDate,
          EndTime: this.state.EndTime,
          EndDate: this.state.EndDate
        }
      })
      .then(response => this.props.setSeen())
      .catch(err => console.log(err))
    } else {
      const todo_id = this.props.currentItem[0];
      axios.put(`http://ec2-3-91-186-233.compute-1.amazonaws.com:3030/todos/edit/${todo_id}`, {
        todoObj: {
          Description: this.state.Description,
          Category: this.state.Category,
          StartTime: this.state.StartTime,
          StartDate: this.state.StartDate,
          EndTime: this.state.EndTime,
          EndDate: this.state.EndDate
        }
      })
      .then(response => this.props.setSeen())
      .catch(err => console.log(err))
    }

    // this.props.setSeen()
    event.preventDefault();
  }

  componentDidMount() {
    const currentItem = this.props.currentItem;
    if(this.props.addButton) {
      this.setState({
        Description: '',
        Category: '',
        StartTime: '',
        StartDate: '',
        EndTime: '',
        EndDate: ''
      })
    } else {
      if (currentItem) {
        let StartMonth = Number(new Date(currentItem[2].slice(0, -8)).getMonth())+1;
        if (StartMonth < 10) {
          StartMonth = StartMonth.toString();
          StartMonth = '0' + StartMonth;
        }
        let Endmonth = Number(new Date(currentItem[3].slice(0, -8)).getMonth())+1;
        if (Endmonth < 10) {
          Endmonth = Endmonth.toString();
          Endmonth = '0' + Endmonth;
        }
        let StartDate = Number(new Date(currentItem[2].slice(0, -8)).getDate());
        if (StartDate < 10) {
          StartDate = StartDate.toString();
          StartDate = '0' + StartDate;
        }
        let EndDate = Number(new Date(currentItem[3].slice(0, -8)).getDate());
        if (EndDate < 10) {
          EndDate = EndDate.toString();
          EndDate = '0' + EndDate;
        }
        this.setState({
            Description: currentItem[1],
            Category: currentItem[4]? currentItem[4]: '',
            StartDate: new Date(currentItem[2]).getFullYear() + '-' + StartMonth + '-' + StartDate,
            StartTime: currentItem[2].slice(-5).replace(' ', '0'),
            EndDate: new Date(currentItem[3]).getFullYear() + '-' + Endmonth + '-' + EndDate,
            EndTime: currentItem[3].slice(-5).replace(' ', '0')
        })
      }
    }
  }

  render() {
    return (
      <div id='editModal'>
        <form onSubmit={this.handleSubmit} className='editModalContent'>
          <span className="close" onClick={this.props.setSeen}>
            &times;
          </span>
          <span style={{'left': '45%', 'position': 'absolute'}}>
            edit todo
          </span>
          <br />
          <label>
            Description:
            <input type="text" name='Description'value={this.state.Description} onChange={this.handleChange} />
          </label>
          <label>
            Category:
            <input type="text" name='Category' value={this.state.Category} onChange={this.handleChange} />
          </label>
          <label>
            Start Date:
            <input type="date" name='StartDate' value={this.state.StartDate} onChange={this.handleChange} />
          </label>
          <label>
            Start Time:
            <input type="time" name='StartTime' value={this.state.StartTime} onChange={this.handleChange} />
          </label>
          <label>
            End Date:
            <input type="date" name='EndDate' value={this.state.EndDate} onChange={this.handleChange} />
          </label>
          <label>
            End Time:
            <input type="time" name='EndTime'value={this.state.EndTime} onChange={this.handleChange} />
          </label>
          <input className='editSubmit' type="submit" value="Submit" style={{'float': 'right'}}/>
        </form>
      </div>
    );
  }

}

export default EditModal;