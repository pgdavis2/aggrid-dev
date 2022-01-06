import React, { Component } from "react";
import { AgChartsReact } from "ag-charts-react";

class AggridChart2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        data: [
           
              {
                quarter: "Q1'19",
                iphone: 124,
                mac: 18,
                ipad: 16,
                wearables: 18,
                services: 26,
              },
              {
                quarter: "Q2'19",
                iphone: 108,
                mac: 20,
                ipad: 16,
                wearables: 18,
                services: 40,
              },
              {
                quarter: "Q3'19",
                iphone: 96,
                mac: 22,
                ipad: 18,
                wearables: 24,
                services: 42,
              },
              {
                quarter: "Q4'19",
                iphone: 104,
                mac: 22,
                ipad: 14,
                wearables: 20,
                services: 40,
              },
        ],
        series: [
            {
              type: 'column',
              xKey: 'quarter',
              yKeys: ['ipad'],
            },
          ],
      }
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

export default AggridChart2;