import React from 'react';
import Chart from 'chart.js/auto';


class ChartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidUpdate(oldProps) {
    //when the component updates its state pass the neccessary chart data to the state
    if (oldProps.data !== this.props.data) {
      this.setState({

      })
    }
  }

  render() {
    return (
      <div>
        <canvas id="statisticsChart" width="400" height="400"></canvas>
      </div>
    )
  }
}

export default ChartView;