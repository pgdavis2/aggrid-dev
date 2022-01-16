import React, { useState } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'ag-grid-enterprise';
import { DART_PL } from '../data/DART_PL_hr.json'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import './pageStyles.css'
import AggridChart1 from '../components/charts/AggridChart1';
import AggridChart3MultiLine from '../components/charts/AggridChart3MultiLine';
import Kpi1 from '../components/charts/Kpi/Kpi1';
import UnitSelector from '../components/Selectors/UnitSelector';
import ReactDatePicker from '../components/Selectors/ReactDatePicker';
import TopGenpages from '../components/TopGenpages';

//This adds integrated charts
export default function DaTest1() {
    
        const [gridApi, setGridApi] = useState(null);
        const [gridColumnApi, setGridColumnApi] = useState(null);
      
        const onGridReady = (params) => {
          setGridApi(params.api);
          setGridColumnApi(params.columnApi);
        };
      
        const onFirstDataRendered = (params) => {
            createDARTPLChart(params.api);
            // createMeterByRIDChart(params.api);
          
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

// // Attempt to filter on page
// const myGuy=UnitSelector.opt
// console.log(myGuy)
// https://pretagteam.com/question/how-can-i-filter-a-json-object-in-javascript
// I don't know how to pass the react-select parameter yet so this is hard coded
// var result = DART_PL.filter(obj => obj.ReportingID === "RMS 16A");


//This is where the fun begins
  return (
    
    <div id="wrapper" style={{width: '95%',height: 800,minHeight:"75%"}}>
      <div style={{display:'flex'}}>
        
        <span style={{display:'flex',fontSize:"30px",fontWeight:'bold',paddingLeft:"90px",float:'left'}}>DA P&L for Generator:</span>
        <div style={{fontSize:"18px",fontWeight:'normal',paddingLeft:"20px",width:'300px'}} ><UnitSelector /></div>
            <span style={{fontSize:"20px",fontWeight:'normal',paddingTop:"6px",paddingLeft:"90px",float:'left'}}> Select Analysis Date Range: </span> 
        <div style={{fontSize:"18px",fontWeight:'normal',paddingLeft:"20px",paddingTop:"3px",width:'300px'}} ><ReactDatePicker /></div> 
        <TopGenpages />
        
      </div>
      <div style={{display:'flex'}} id="top">
            
            <div id="barChart" ></div>
            <div  id="highChart"><AggridChart1 /></div>
            
      </div>

        <div style={{display:'flex'}} id="middle">
          
         
          
            <div ><Kpi1 /></div>
            <div  id="midChart2"><AggridChart3MultiLine /></div>  
        </div>
      
        <div id="myGrid" className='ag-theme-balham' >
        <button onClick={() => setSideBarVisible(true)}>
              Open SideBar
            </button>
            <button onClick={() => setSideBarVisible(false)}>
              Close SideBar
            </button>
        
        <AgGridReact 
        closeToolPanel = {true}
        chartThemes={['ag-theme-balham']}
        
        sideBar={sideBar}
          
        onGridReady={onGridReady}
        onFirstDataRendered={onFirstDataRendered}     
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
        <AgGridColumn field="AssetOwner" valueFormatter={''}  filter={true}
                cellStyle={{'text-align': 'center'}}
        ></AgGridColumn>
        <AgGridColumn field="ReportingID" valueFormatter={''}  filter={true}
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
        <AgGridColumn field="DART_PL" cellClass= 'ag-right-aligned-cell'></AgGridColumn>
        <AgGridColumn field="DA_LMP" aggFunc="avg"></AgGridColumn>
        <AgGridColumn field="RT_LMP" aggFunc="avg" ></AgGridColumn>
        <AgGridColumn field="DA_Tot_En" valueFormatter={'numberValueFormatter'}></AgGridColumn>
        <AgGridColumn field="RT_Meter" valueFormatter={'numberValueFormatter'}></AgGridColumn>
        <AgGridColumn field="DA_Tot_Rev" ></AgGridColumn>
        <AgGridColumn field="RT_EN_Rev" ></AgGridColumn>
        <AgGridColumn field="RT_AS_Rev" ></AgGridColumn>
        <AgGridColumn field="RSG_MWP" ></AgGridColumn>
   
      </AgGridReact>
      <div>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>
        <h1>This is the end</h1>

      </div>
        </div>
        
    </div>
    
    )
    
    function createDARTPLChart(gridApi) {
        gridApi.createCrossFilterChart({
          chartType: 'bar',
          cellRange: {
            columns: ['ReportingID', 'DART_PL' ]
          },
          sort: 'desc',
          aggFunc: 'sum',
          chartThemeOverrides: {
            common: {
              title: {
                enabled: true,
                text: 'DART P&L ($)',
              },
              legend: { enabled: false },
            },
            axes: {
              number: {
                label: {
                  formatter: function (params) {
                    return params.value / 1000 + '$k';
                  },
                },
              },
            },
          },
          chartContainer: document.querySelector('#barChart'),
        });
      }
}
