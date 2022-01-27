import React, { Component } from "react";
import { AgChartsReact } from "ag-charts-react";
import { DATA } from '../../data/data_hr.json'

var result = DATA.filter(obj => obj.Unit === "Unit1");
//var result = result1.filter(obj =>  obj.Date >='1/1/2019' && obj.Date<= '1/31/2019');

class Linechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        autoSize: true,
        data: result,
        title: {
          text: 'Energy (MWh) and Profit ($)',
          fontSize: 18,
        },
        subtitle: {
          text: 'Source: Public',
        },
        series: [
          {
            type: 'line',
            xKey: 'DateTime',
            yKey: 'Profit',
          },
          {
            type: 'line',
            xKey: 'DateTime',
            yKey: 'Energy',
          },

        ],
        axes: [
          {
            type: 'category',
            position: 'bottom',
            label: { rotation: -45 }
          },
          {
            type: 'number',
            position: 'left',
            keys: ['Profit'],
            title: { enabled: true, text: 'Profits ($)' },
            label: {},
          },

          {
            type: 'number',
            position: 'right',
            keys: ['Energy'],
            title: { enabled: true, text: 'Energy (MMWh)' },
            label: {},
          },

        ],
        legend: {
          position: 'bottom',
          markerShape: 'square',
          strokeWidth: 0,
        },
        navigator: {
          enabled: true,
          min: 0,
          max: .1,
          height: 15
        },
      },
    };
  }

  componentDidMount() { }

  render() {
    return (
      <div className="ag-theme-balham" style={{ height: 475 }}>
        <AgChartsReact options={this.state.options} />
      </div>
    );
  }
}

export default Linechart;