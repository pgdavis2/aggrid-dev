import React, { Component } from "react";
import { AgChartsReact } from "ag-charts-react";
import { DART_PL } from '../../data/DART_PL_hr.json'

var result1 = DART_PL.filter(obj => obj.Unit === "Tiger6" );
var result = result1.filter(obj =>  obj.OpDate >='1/1/2019' && obj.OpDate<= '2/28/2019');

class Aglinecharten extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
          autoSize: true,
          data: result,
          title: {
            text: 'DA & RT Energy (MWh)',
            fontSize: 18,
          },
          subtitle: {
            text: 'Source: PCI',
          },
          series: [
            { 
              xKey: 'DateTime',
              yKey: 'DA_En',
            },
            { 
                xKey: 'DateTime',
                yKey: 'RT Meter',
              },

          ],
          axes: [
            {
                type: 'category',
            position: 'bottom',
              label: {
                rotation:-45,
                }
            },
                {
                    type: 'number',
                    position: 'left',
                  }, 
             
            ],
            
          
          legend: {
            position: 'bottom',
            markerShape: 'square',
            strokeWidth: 0,
          },
          navigator: { 
            enabled: true,
            min:0,
            max:.1,
            height:15 },
        },
      };
    }

  componentDidMount() {}

  render() {
    return (
      <div className="ag-theme-balham" style={{ height: 475 }}>
          <AgChartsReact options={this.state.options} />
          </div>
    );
  }
}

export default Aglinecharten;