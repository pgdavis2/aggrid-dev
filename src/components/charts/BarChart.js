import React from "react";
import { AgChartsReact } from "ag-charts-react";

export default function Barchart({ result }) {
  return (
    <div className="ag-theme-balham" style={{ height: 475 }}>
    <AgChartsReact options={{
          autoSize: true,
          data: result,
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
    }}

      />
      </div>
    );
  }