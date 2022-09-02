import React, {useEffect} from 'react';

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
    alert('submitted');
    event.preventDefault();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const currentItem = nextProps.currentItem;
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
    return {
      Description: currentItem[1],
      Category: currentItem[4]? currentItem[4]: '',
      StartDate: currentItem[2].slice(8, 12) + '-' + StartMonth + '-' + new Date(currentItem[2].slice(0, -8)).getDate(),
      StartTime: currentItem[2].slice(-5).replace(' ', '0'),
      EndDate: currentItem[3].slice(8, 12) + '-' + Endmonth + '-' + new Date(currentItem[3].slice(0, -8)).getDate(),
      EndTime: currentItem[3].slice(-5).replace(' ', '0')
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
          <input type="submit" value="Submit" style={{'float': 'right'}}/>
        </form>
      </div>
    );
  }

}

export default EditModal;