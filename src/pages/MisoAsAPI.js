import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useEffect, useState, useRef } from 'react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../App.css'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function MisoAsAPI() {
   
    const url='https://api.misoenergy.org/MISORTWDDataBroker/DataBrokerServices.asmx?messageType=getexantelmp&returnType=json'
  
    const [rowData, setRowData] = useState([])
    const [colDefs, setColDefs] = useState([
        
        {field: 'LMPData',flex: 1},
        {field: 'RefId',flex: 1}
        // {field: 'pressure',flex: 1},
        // {field: 'solarradiation',flex: 1}
        
    ]);
    useEffect(() => {
         fetch(url)
        .then(response => response.json())
        .then(rowData => {
            setRowData(rowData.LMPData)}); //rowData.(the array name return
    }, []);

    return (
        <div>
            <Typography variant="h4" color='charcoal' fontWeight= '500'>
          Miso AS Data
          </Typography>
        
          <Box sx={{ width: '100%',backgroundColor:'lightgray' }}>
            <Grid container spacing={1} style={{ paddingLeft:'15px',paddingBottom:'8px' }}>
  
                {/* <Grid item xs={3}>
                <ZipSelector /> 
                </Grid> */}


            {/* <Grid item xs={2} style={{ paddingLeft:'8px',paddingTop:'12px' }}> 
                    <ReactDatePicker /> 
                </Grid> */}
            
            </Grid>
        </Box>

        <div className="ag-theme-balham " style={{height: 300}}>
            <AgGridReact
                rowData={rowData}
                groupSelectsChildren={true}
                columnDefs={colDefs}
                >  
            </AgGridReact>
        </div>
        </div>
    );
}