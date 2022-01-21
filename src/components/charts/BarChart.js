import React, { Component } from "react";
import { AgChartsReact } from "ag-charts-react";
import { DATA } from '../../data/data_dy.json'

class AggridChart3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
          autoSize: true,
          data: DATA,
          title: {
            text: 'Energy (MWh)',
            fontSize: 18,
          },
          subtitle: {
            text: 'Source: Public',
          },
          series: [
            {
              type: 'column',
              xKey: 'Unit',
              yKeys: ['Energy'],
              yNames: ['Actual Energy'],
              grouped: true,
              fills: ['#a2bf8a'],
              strokeWidth: 0,
            },
          
          ],
          axes: [
            {
              type: 'category',
              position: 'bottom',
              label: {rotation:-45},
            },
            {
              type: 'number',
              position: 'left',
              keys: ['Energy'],
              title: {
                enabled: true,
                text: 'MWh',
              },
              
            },
           
          ],
          legend: {
            position: 'bottom',
            markerShape: 'square',
            strokeWidth: 0,
          },
        },
      };
    }

  componentDidMount() {}

  render() {
    return (
      <div className="ag-theme-balham">
          <AgChartsReact options={this.state.options} />
          </div>
    );
  }
}

export default AggridChart3;