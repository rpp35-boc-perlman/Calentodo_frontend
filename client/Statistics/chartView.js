import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


class ChartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: []
    }
    this.dataMake = this.dataMake.bind(this);
  }

  dataMake() {
    //when the component updates its state pass the neccessary chart data to the state
      //iterate through props and get the body for each todo
      //these are the labels
      var labels = [];
      var data = {
        label: 1, //category
        backgroundColor: [],
        data: []
      };

      for (var i = 0; i < this.props.activeTodos.length; i++) {
        //get start and end date from todo
        var start = new Date(this.props.activeTodos[i].start_date).getTime();
        var end = new Date(this.props.activeTodos[i].end_date).getTime();
        data.data.push(Math.round(Math.abs(end - start) / 3600000))
        if (this.props.activeTodos[i].color) {
          data.backgroundColor.push(this.props.activeTodos[i].color)
        } else {
          data.backgroundColor.push('rgb(66, 135, 245)')
        }
        //convert to unix epoch
        //calculate difference in miliseconds
        //convert to hours
        labels.push(this.props.activeTodos[i].todo_body);
      }

      this.setState({
        labels: labels,
        data: data
      });
  }

  componentDidMount() {
    this.dataMake();
  }

  componentDidUpdate(oldProps) {
    //when the component updates its state pass the neccessary chart data to the state
    if (oldProps.data !== this.props.data) {
     this.dataMake()
    }
  }

  render() {
    return (
      <div>
        <Bar id="statisticsChart" data={
          {
            labels: this.state.labels,
            datasets: [this.state.data]
          }
        }></Bar>
      </div>
    )
  }
}

export default ChartView;