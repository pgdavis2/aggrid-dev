import React from "react";
import { AgChartsReact } from "ag-charts-react";

export default function Linechart({ result }) {
  return (
    <div className="ag-theme-balham" style={{ height: 475 }}>
      <AgChartsReact options={{
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
      }} />
    </div>
  );
}