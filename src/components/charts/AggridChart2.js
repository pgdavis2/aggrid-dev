import React, { Component } from "react";
import { AgChartsReact } from "ag-charts-react";

class AggridChart2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        data: [
           
              {
                month: "Q1'18",
                BGS7: 124,
                BGS8: 18,
                'BARTON WIND FARM': 16,
              
              },
              {
                month: "Q2'18",
                BGS7: 108,
                BGS8: 20,
                'BARTON WIND FARM': 16,
               
              },
              {
                month: "Q3'18",
                BGS7: 96,
                BGS8: 22,
                'BARTON WIND FARM': 18,
               
              },
              {
                month: "Q4'18",
                BGS7: 104,
                BGS8: 22,
                'BARTON WIND FARM': 14,
                
              },
        ],
        series: [
            {
              type: 'column',
              xKey: 'month',
              yKeys: ['BARTON WIND FARM'],
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