import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'ag-grid-enterprise';
import { DATA } from '../data/data_hr.json'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import './pageStyles.css'




export default function Chart_crossfilter({ myunit, setmyunit }) {


  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onFirstDataRendered = (params) => {
    createLineChart(params.api);
    createBarChart(params.api);

  };

  var numberValueFormatter = function (params) {
    return parseFloat(params.value).toFixed(2);
  };
  var dollarValueFormatter = function (params) {
    var formatted = parseFloat(params.value).toFixed(2);
    if (formatted.indexOf('-') === 0) {
      return '-$' + formatted.slice(1);
    }
    return '$' + formatted;
  };

  var filterParams = {
    comparator: function (filterLocalDateAtMidnight, cellValue) {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split('/');
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[0]) - 1,
        Number(dateParts[1])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
    browserDatePicker: true,
    inRangeInclusive: true,
    minValidYear: 2018,
    maxValidYear: 2021,
  };

  const sideBar = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        minWidth: 100,
        maxWidth: 225,
        width: 150
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
        minWidth: 100,
        maxWidth: 400,
        width: 150
      }
    ],
    position: 'left',
    defaultToolPanel: 'filters',
    hiddenByDefault: true,
  };
  const setSideBarVisible = (value) => {
    gridApi.setSideBarVisible(value);
  };

  const onBtExport = () => {
    gridApi.exportDataAsExcel();
  };

  var result = DATA.filter(obj => obj.Unit === myunit.Unit);
  //This is where the fun begins
  return (
    <Box >

      <Grid container spacing={1}>

        <Grid id='barChart' item xs={3}></Grid>

        <Grid id='lineChart' item xs={9}></Grid>


        <Grid className='ag-theme-balham' item xs={12} sx={{ height: '600px' }}>
          <span style={{ color: 'black', fontSize: '16px' }}  >Sidebar:</span>
          <ButtonGroup variant="text" size="small" aria-label="text button group">
            <Button
              onClick={() => setSideBarVisible(true)}>
              Show
            </Button>

            <Button
              onClick={() => setSideBarVisible(false)}>
              Hide
            </Button>
          </ButtonGroup>
          &nbsp;  &nbsp; &nbsp;
          <Button
            onClick={() => onBtExport()}>
            Export to Excel
          </Button>

          <AgGridReact
            closeToolPanel={true}
            chartThemes={['ag-theme-balham']}

            sideBar={sideBar}

            onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
            //groupDisplayType="groupRows"
            reactUi={true}
            enableCharts={true}
            enableRangeSelection={true}
            defaultColDef={{
              enableRowGroup: true,
              enablePivot: true,
              enableValue: true,
              sortable: true,
              floatingFilter: true,
              resizable: true,
              sideBar: { sideBar },
              flex: 1,
              allowedAggFuncs: ['sum', 'min', 'max', 'avg'],
              aggFunc: 'sum',
              filter: 'agNumberColumnFilter',
              filterParams: 'dollarFilterParams',
              cellClass: 'ag-right-aligned-cell',
              valueFormatter: dollarValueFormatter,

            }}
            statusBar={{ statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' }}
            suppressAggFuncInHeader
            rowData={result}


          >
            <AgGridColumn field="Unit" valueFormatter={''} filter={true}
              cellStyle={{ 'text-align': 'center' }} cellClass={"ag-header-cell-label"}
              chartDataType="category"
            ></AgGridColumn>
            <AgGridColumn field="Date" valueFormatter={''} filterParams={filterParams} filter={"agDateColumnFilter"} minWidth={180}
              cellStyle={{ 'text-align': 'center' }}

            ></AgGridColumn>
            <AgGridColumn field="DateTime" filterParams={filterParams} filter={"agDateColumnFilter"} minWidth={180}
              valueFormatter={''}
              cellStyle={{ 'text-align': 'center' }}>
            </AgGridColumn>
            <AgGridColumn field="Profit" cellClass='ag-right-aligned-cell'></AgGridColumn>
            <AgGridColumn field="Price" aggFunc="avg"></AgGridColumn>
            <AgGridColumn field="Energy" valueFormatter={'numberValueFormatter'}></AgGridColumn>
            <AgGridColumn field="Revenue" ></AgGridColumn>
            <AgGridColumn field="Cost" ></AgGridColumn>
          </AgGridReact>
        </Grid>

      </Grid>

    </Box>
  )
}

function createLineChart(gridApi) {
  gridApi.createCrossFilterChart(

    {
      chartType: 'line',
      cellRange: { columns: ['DateTime', 'Energy'] },
      aggFunc: 'sum',

      chartThemeOverrides: {

        common: {
          navigator: {
            enabled: true,
            min: 0,
            max: .1,
            height: 15
          },
          title: {
            enabled: true,
            text: 'Energy (MWh)',
          },
          legend: { enabled: false },

          axes: {
            category: { label: { rotation: -45 } },
            number: {
              label: {},
            },
          },
        },

      },
      chartContainer: document.querySelector('#lineChart'),
    });
}

function createBarChart(gridApi) {
  gridApi.createCrossFilterChart(

    {
      chartType: 'column',
      cellRange: { columns: ['Unit', 'Energy'] },
      aggFunc: 'sum',

      chartThemeOverrides: {

        common: {

          title: {
            enabled: true,
            text: 'Energy (MWh)',
          },
          legend: { enabled: false },

          axes: {
            category: { label: { rotation: -45 } },

          },
        },

      },
      chartContainer: document.querySelector('#barChart'),
    });
}