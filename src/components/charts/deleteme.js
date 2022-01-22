import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine-dark.css';

const GridExample = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onFirstDataRendered = (params) => {
    createQuarterlySalesChart(params.api);
    createSalesByRefChart(params.api);
    createHandsetSalesChart(params.api);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id="wrapper">
        <div id="top">
          <div id="columnChart" className="ag-theme-alpine-dark"></div>
          <div id="pieChart" className="ag-theme-alpine-dark"></div>
        </div>
        <div id="barChart" className="ag-theme-alpine-dark"></div>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine-dark"
        >
          <AgGridReact
            modules={AllModules}
            defaultColDef={{
              flex: 1,
              editable: true,
              sortable: true,
              filter: 'agMultiColumnFilter',
              floatingFilter: true,
              resizable: true,
            }}
            rowData={generateData()}
            enableCharts={true}
            chartThemes={['ag-default-dark']}
            chartThemeOverrides={{
              common: {
                padding: {
                  top: 20,
                  right: 40,
                  bottom: 20,
                  left: 30,
                },
              },
              cartesian: { axes: { category: { label: { rotation: 0 } } } },
            }}
            onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
          >
            <AgGridColumn field="salesRep" chartDataType="category" />
            <AgGridColumn field="handset" chartDataType="category" />
            <AgGridColumn
              headerName="Sale Price"
              field="sale"
              maxWidth={160}
              aggFunc="sum"
              chartDataType="series"
            />
            <AgGridColumn field="saleDate" chartDataType="category" />
            <AgGridColumn
              field="quarter"
              maxWidth={160}
              filter="agSetColumnFilter"
              chartDataType="category"
            />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

function createQuarterlySalesChart(gridApi) {
  gridApi.createCrossFilterChart({
    chartType: 'column',
    cellRange: {
      columns: ['quarter', 'sale'],
    },
    aggFunc: 'sum',
    chartThemeOverrides: {
      common: {
        title: {
          enabled: true,
          text: 'Quarterly Sales ($)',
        },
        legend: { enabled: false },
        axes: {
          category: { label: { rotation: 0 } },
          number: {
            label: {
              formatter: function (params) {
                return params.value / 1000 + 'k';
              },
            },
          },
        },
      },
    },
    chartContainer: document.querySelector('#columnChart'),
  });
}
function createSalesByRefChart(gridApi) {
  gridApi.createCrossFilterChart({
    chartType: 'pie',
    cellRange: {
      columns: ['salesRep', 'sale'],
    },
    aggFunc: 'sum',
    chartThemeOverrides: {
      common: {
        title: {
          enabled: true,
          text: 'Sales by Representative ($)',
        },
      },
      pie: {
        series: {
          title: { enabled: false },
          label: { enabled: false },
        },
      },
    },
    chartContainer: document.querySelector('#pieChart'),
  });
}
function createHandsetSalesChart(gridApi) {
  gridApi.createCrossFilterChart({
    chartType: 'bar',
    cellRange: {
      columns: ['handset', 'sale'],
    },
    aggFunc: 'count',
    chartThemeOverrides: {
      common: {
        title: {
          enabled: true,
          text: 'Handsets Sold (Units)',
        },
        legend: { enabled: false },
      },
      axes: {
        number: {
          label: {
            formatter: function (params) {
              return params.value / 1000 + 'k';
            },
          },
        },
      },
    },
    chartContainer: document.querySelector('#barChart'),
  });
}

render(<GridExample></GridExample>, document.querySelector('#root'));