import React from 'react';

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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Description:
            <input type="text" name='Description'value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Category:
            <input type="text" name='Category' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Start Time:
            <input type="time" name='StartTime' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Start Date:
            <input type="date" name='StartDate' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            End Time:
            <input type="time" name='EndTime'value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            End Date:
            <input type="date" name='EndDate' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default EditModal;