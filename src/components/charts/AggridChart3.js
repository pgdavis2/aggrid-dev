import React, { Component } from "react";
import { AgChartsReact } from "ag-charts-react";
import { DART_PL } from '../../data/DART_PL_dy.json'

class AggridChart3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
          autoSize: true,
          data: DART_PL,
          title: {
            text: 'DART P&L ($)',
            fontSize: 18,
          },
          subtitle: {
            text: 'Source: PCI',
          },
          series: [
            {
              type: 'column',
              xKey: 'OpDate',
              yKeys: ['DA_Tot_En', 'RT_Meter'],
              yNames: ['DA Energy', 'RT Energy'],
              grouped: true,
              fills: ['#c16068', '#a2bf8a'],
              strokeWidth: 0,
            },
          
          ],
          axes: [
            {
              type: 'category',
              position: 'bottom',
            },
            {
              type: 'number',
              position: 'left',
              keys: ['DA_Tot_En', 'RT_Meter'],
              title: {
                enabled: true,
                text: 'MWh',
              },
              label: {
                formatter: function (params) {
                  return params.value / 1000 + 'M';
                },
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