import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'ag-grid-enterprise';
import { DART_PL } from '../data/DART_PL_hr.json'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import './pageStyles.css'
import AggridChart2 from '../components/charts/AggridChart2';
import AggridChart1 from '../components/charts/AggridChart1';
import Aglinecharten from '../components/charts/Aglinecharten';
import Kpi1 from '../components/charts/Kpi/Kpi1';
import ReactDatePicker from '../components/Selectors/ReactDatePicker';
import Typography from '@mui/material/Typography';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import UnitSelectorDynamic from '../components/Selectors/UnitSelectorDynamic';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

//This adds integrated charts
export default function DartGen() {
  

  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
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
    inRangeInclusive:true,
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
// // Attempt to filter on page
// const myGuy=UnitSelector.opt
// console.log(myGuy)
// https://pretagteam.com/question/how-can-i-filter-a-json-object-in-javascript
// I don't know how to pass the react-select parameter yet so this is hard coded

const myunit=UnitSelectorDynamic.myunit
console.log(myunit)

 //var result = DART_PL.filter(obj => obj.ReportingID === {myunit});
var result=DART_PL;

//This is where the fun begins
  return (
  <Box >

    <Grid container spacing={1}>
      
      <Grid  item xs="auto"><Kpi1 /></Grid>


      {/* <Grid item xs="auto">
        <Item><AggridChart2 /></Item>
      </Grid>
      
      <Grid item xs="auto">
        <Item><AggridChart1 /></Item>
      </Grid> */}

      <Grid item xs="10" sx={{ height: 500 }}>
        <Item><Aglinecharten /></Item>
      </Grid>
    
      <Grid className='ag-theme-balham' item xs={12} sx={{ height: '600px' }}>
        <span style={{color:'black', fontSize:'16px'}}  >Sidebar:</span>
        <ButtonGroup variant="text" size="small"  aria-label="text button group">
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
                closeToolPanel = {true}
                chartThemes={['ag-theme-balham']}
                
                sideBar={sideBar}  
                //groupDisplayType="groupRows"
                reactUi={true}
                enableCharts = {true}
                enableRangeSelection = {true}
                defaultColDef={{
                enableRowGroup: true,
                enablePivot: true,
                enableValue: true,
                sortable: true,
                floatingFilter: true,
                resizable: true,
                sideBar:{sideBar},
                flex: 1,
                allowedAggFuncs:['sum', 'min', 'max','avg'],
                aggFunc:'sum',
                filter:'agNumberColumnFilter',
                filterParams:'dollarFilterParams',
                cellClass: 'ag-right-aligned-cell',
                valueFormatter:dollarValueFormatter,
                
                }}
                statusBar={{statusPanel:'agTotalAndFilteredRowCountComponent',align: 'left'}}          
                suppressAggFuncInHeader
                rowData={result}
                >
               
                <AgGridColumn field="Unit" valueFormatter={''}  filter={true}
                        cellStyle={{'text-align': 'center'}} cellClass={"ag-header-cell-label"}
                        chartDataType="category"
                ></AgGridColumn>
                <AgGridColumn field="OpDate" valueFormatter={''} filterParams={filterParams} filter={"agDateColumnFilter"} minWidth={180}
                        cellStyle={{'text-align': 'center'}}
                        
                ></AgGridColumn>
                <AgGridColumn field="DateTime" filterParams={filterParams} filter={"agDateColumnFilter"} minWidth={180}
                        valueFormatter={''} 
                        cellStyle={{'text-align': 'center'}}>
                </AgGridColumn>
                <AgGridColumn field="DA_PL" cellClass= 'ag-right-aligned-cell'></AgGridColumn>
                <AgGridColumn field="DA_LMP" aggFunc="avg"></AgGridColumn>
                <AgGridColumn field="RT_LMP" aggFunc="avg" ></AgGridColumn>
                <AgGridColumn field="DA_En" valueFormatter={'numberValueFormatter'}></AgGridColumn>
                <AgGridColumn field="RT Meter" valueFormatter={'numberValueFormatter'}></AgGridColumn>
                <AgGridColumn field="DA_Rev" ></AgGridColumn>
             
            </AgGridReact> 
      </Grid>

    </Grid>

  </Box>
    
  )}