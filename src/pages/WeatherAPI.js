import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useEffect, useState, useRef } from 'react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../App.css'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ZipSelector from '../components/Selectors/ZipSelector';
import ReactDatePicker from '../components/Selectors/ReactDatePicker';

//Free VC api keys - limited to 1000 records/day each
//key1='U7KAS9GNTXA55U5JGNUJDKV3F' outlook
//key2='R74KJYK6Y69HYT8NAWVPQMC7J' gmail

var vc_api='R74KJYK6Y69HYT8NAWVPQMC7J'

//const myplace=ZipSelector.myzip.zip
const myplace=ZipSelector.myzip

export default function WeatherAPI() {
   
    const url='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/27587/last2days?unitGroup=us&include=hours&key='+vc_api+'&contentType=json'
  
    const [rowData, setRowData] = useState([])
    const [colDefs, setColDefs] = useState([
        
        {field: 'datetime',flex: 1},
        {field: 'temp',flex: 1},
        {field: 'pressure',flex: 1},
        {field: 'solarradiation',flex: 1}
        
    ]);
    useEffect(() => {
         fetch(url)
        .then(response => response.json())
        .then(rowData => {
            setRowData(rowData.days)}); //rowData.(the array name return
    }, []);

    return (
        <div>
            <Typography variant="h4" color='charcoal' fontWeight= '500'>
          Weather Data for {myplace}
          </Typography>
        
          <Box sx={{ width: '100%',backgroundColor:'lightgray' }}>
            <Grid container spacing={1} style={{ paddingLeft:'15px',paddingBottom:'8px' }}>
  
                <Grid item xs={3}>
                <ZipSelector /> 
                </Grid>


            <Grid item xs={2} style={{ paddingLeft:'8px',paddingTop:'12px' }}> 
                    <ReactDatePicker /> 
                </Grid>
            
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