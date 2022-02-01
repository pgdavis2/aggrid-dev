import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useEffect, useState, useRef } from 'react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../App.css'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ZipSelector from '../components/Selectors/ZipSelector';
import ReactDatePicker from '../components/Selectors/ReactDatePicker';

export default function WeatherAPI() {

    const [rowData, setRowData] = useState([])
    const [colDefs, setColDefs] = useState([

        { field: 'datetime', flex: 1 },
        { field: 'temp', flex: 1 },
        { field: 'pressure', flex: 1 },
        { field: 'solarradiation', flex: 1 }

    ]);

    async function fetchData() {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/27587/last2days?unitGroup=us&include=hours&key=${process.env.REACT_APP_VC_API}&contentType=json`
        const response = await fetch(url);
        const json = await response.json();
        setRowData(json.days);
    }

    return (
        <div>
            <Typography variant="h4" color='charcoal' fontWeight='500'>
                Weather Data for {ZipSelector.myzip}
            </Typography>

            <Box sx={{ width: '100%', backgroundColor: 'lightgray' }}>
                <Grid container spacing={1} style={{ paddingLeft: '15px', paddingBottom: '8px' }}>

                    <Grid item xs={3}>
                        <ZipSelector />
                    </Grid>


                    <Grid item xs={2} style={{ paddingLeft: '8px', paddingTop: '12px' }}>
                        <ReactDatePicker />
                    </Grid>

                    <Grid item xs={1} style={{ paddingLeft: '8px', paddingTop: '12px' }}>
                        <ToggleButtonGroup defaultValue="day">
                            <ToggleButton value="day">Day</ToggleButton>
                            <ToggleButton value="hour">Hour</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>

                    <Grid item xs={1} style={{ paddingLeft: '8px', paddingTop: '12px' }}>
                        <button onClick={fetchData}>Refresh</button>
                    </Grid>

                </Grid>
            </Box>

            <div className="ag-theme-balham " style={{ height: 300 }}>
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