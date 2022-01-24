import './pageStyles.css'
import MyTabs from '../components/MyTabs';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UnitSelectorDynamic from '../components/Selectors/UnitSelectorDynamic';
import ReactDatePicker from '../components/Selectors/ReactDatePicker';
import * as React from 'react';



export default function GenSummary() {
  return (
    <div>
      <Typography variant="h4" color='charcoal' fontWeight='500'>
        Generators
      </Typography>

      <Box sx={{ width: '100%', backgroundColor: 'lightgray' }}>
        <Grid container spacing={1} style={{ paddingLeft: '15px', paddingBottom: '8px' }}>

          <Grid item xs={3}>
            <UnitSelectorDynamic />
          </Grid>


          <Grid item xs={2} style={{ paddingLeft: '8px', paddingTop: '12px' }}>
            <ReactDatePicker />
          </Grid>

        </Grid>
      </Box>

      <Grid container spacing={1} sx={{ paddingLeft: '15px' }}>

        <MyTabs />

      </Grid>

    </div>
  );
}