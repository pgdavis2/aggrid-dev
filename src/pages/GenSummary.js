import './pageStyles.css'
import MyTabs from '../components/MyTabs';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UnitSelectorDynamic from '../components/Selectors/UnitSelectorDynamic';
import ReactDatePicker from '../components/Selectors/ReactDatePicker';
import React, { useState } from 'react';



export default function GenSummary() {
  const [myunit, setmyunit] = useState(['Unit1', 'Unit2', 'Unit3']);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div>
      <Typography variant="h4" color='charcoal' fontWeight='500'>
        Generators
      </Typography>

      <Box sx={{ width: '100%', backgroundColor: 'lightgray' }}>
        <Grid container spacing={1} style={{ paddingLeft: '15px', paddingBottom: '8px' }}>

          <Grid item xs={3}>
            <UnitSelectorDynamic {...{ myunit, setmyunit }} />
          </Grid>


          <Grid item xs={2} style={{ paddingLeft: '8px', paddingTop: '12px' }}>
            <ReactDatePicker {...{ startDate, setStartDate, endDate, setEndDate }} />
          </Grid>

        </Grid>
      </Box>

      <Grid container spacing={1} sx={{ paddingLeft: '15px' }}>

        <MyTabs {...{ myunit, setmyunit }} />

      </Grid>

    </div>
  );
}