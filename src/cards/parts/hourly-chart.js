import React, { Component } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import './hourly-chart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

/** display hourly api data as a chart */
export default class HourlyChart extends Component {
  static defaultProps = {
    title: "[untitled]",
    showDates: false,
  };

  /** convert hourly apiData to chart.js's format */
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

  static UNIT_SYMBOL_MAP = {
    celsius: '°C',
    fahrenheit: '°F',
    percent: '%',
    hPa: 'hPa',
  };

  /** get the symbol that represents the unit of this graph, e.g. °C, hPa */
  getUnitSymbol() {
    const map = this.constructor.UNIT_SYMBOL_MAP;
    return map[this.props.unit];
  }

  /** chart.js settings for the main graph display */
  getMainChartOptions() {
    return {
      layout: {
        padding: {
          left: 30,
        }
      },
      maintainAspectRatio: false,
      scales: {
        // don't show y axis on main chart, but still draw the lines
        yAxis: {
          drawBorder: false,
          drawTicks: false,
          ticks: {
            callback: () => '',
          }
        },
        // hour labels
        xAxis: {
          ticks: {
            callback: function (labelId) {
              const label = this.getLabelForValue(labelId);
              const date = new Date(parseInt(label) * 1000);
              return date.getHours();
            },
          },
        },
        // date labels
        xAxis2: {
          ticks: {
            callback: function (labelId) {
              const label = this.getLabelForValue(labelId);
              const date = new Date(parseInt(label) * 1000);
              if (labelId !== 0 && date.getHours() !== 0) return null;

              return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
            },
            padding: 0,
            display: this.props.showDates,
          },
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: false,
          },
        }
      }
    };
  };

  /** chart.js settings for the axis graph display */
  getAxisChartOptions() {
    return {
      layout: {
        padding: {
          bottom: this.props.showDates ? 42 : 28,
        }
      },
      maintainAspectRatio: false,
      scales: {
        // the y axis
        yAxis: {
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        // hide everything except the y axis
        xAxis: {
          display: false,
        },
      },
      // hide the chart lines
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    };
  }

  render() {
    const chartData = this.getChartData();
    return (
      <div className="chart">
        {/* the axis graph display, this displays the numbers on the left side */}
        <div className='chartjs axis'>
          <Line options={this.getAxisChartOptions()} data={chartData} />
        </div>
        {/* the graph title on the top right of the graph */}
        <span className='chart-title'>
          {this.props.title}
          {this.getUnitSymbol() ? ` (${this.getUnitSymbol()})` : ``}
        </span>
        {/* the main graph display, this is horizontally scrollable */}
        <div className='chartjs main'>
          <Line options={this.getMainChartOptions()} data={chartData} />
        </div>
      </div>
    );
  }
}
