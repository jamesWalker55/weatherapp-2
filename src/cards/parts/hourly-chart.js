import React, { Component } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

export default class HourlyChart extends Component {
  static chartOptions = {
    maintainAspectRatio: false,
    scales: {
      // y: { beginAtZero: true }
    }
  };

  getChartData() {
    const data = this.props.apiData.hourly;
    const attribute = this.props.source;
    const unit = this.props.unit;

    const timestamps = data.map(x => x.dt);

    let values = data.map(x => x[attribute]);

    switch (unit) {
      case "celsius":
        values = values.map(x => x - 273.15);
        break;
      case "fahrenheit":
        values = values.map(x => (x - 273.15) * 9 / 5 + 32);
        break;
      default:
      // do nothing
    }

    const chartData = {
      labels: timestamps,
      datasets: [
        {
          data: values
        }
      ]
    };

    return chartData;
  }

  render() {
    return (
      <div className="chart" style={{ width: "70vw" }}>
        <Line options={this.constructor.chartOptions} data={this.getChartData()} />
      </div>
    );
  }
}
