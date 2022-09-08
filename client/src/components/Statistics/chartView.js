import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import Grid from '@mui/material/Grid';


class ChartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: [],
      display: false
    }
    this.dataMake = this.dataMake.bind(this);
  }

  dataMake() {
    //when the component updates its state pass the neccessary chart data to the state
      //iterate through props and get the body for each todo
      //these are the labels
      if (this.props.activeTodos.length === 0) {
        this.setState({
          labels: [],
          data: [],
          display: false
        })
      } else {
        var labels = [];
        var data = {
          label: 'General', //category
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
          //if the category already exists in a dataset push the current data to that dataset
          //if the category does not exist create a new object in the data array
          if (this.props.activeTodos[i].category) {
            data.label = this.props.activeTodos[i].category;
          }
          //convert to unix epoch
          //calculate difference in miliseconds
          //convert to hours
          labels.push(this.props.activeTodos[i].todo_body);
        }

        this.setState({
          labels: labels,
          data: data,
          display: true
        });
      }
  }

  componentDidMount() {
    this.dataMake();
  }

  componentDidUpdate(oldProps) {
    //when the component updates its state pass the neccessary chart data to the state
    if (oldProps.activeTodos.length !== this.props.activeTodos.length) {
     this.dataMake()
    }
  }

  render() {
    return (
      <Grid item xs={11} md={9} sx={{ backgroundColor: '#113255', padding: 2,  color: '#ffffff' }}>
        <Bar  id="statisticsChart" data={
          {
            labels: this.state.labels,
            datasets: [this.state.data]
          }
        }
        options={{
          plugins: {
            legend: {
              labels: {
                color: 'white'
              }
            }
          },
          scales: {
            y: {
              ticks: {
                color: 'white'
              }
            },
            x:{
              ticks: {
                color: 'white'
              }
            }
          }
        }}
        ></Bar>
      </Grid>
    )
  }
}

export default ChartView;