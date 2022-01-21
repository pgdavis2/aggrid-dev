import './pageStyles.css'
import GenTabs from '../components/GenTabs';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import UnitSelectorDynamic from '../components/Selectors/UnitSelectorDynamic';
import AOSelector from '../components/Selectors/AOSelector';
import ReactDatePicker from '../components/Selectors/ReactDatePicker';
import TextField from '@mui/material/TextField';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import * as React from 'react';
import Button from '@mui/material/Button';


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

export default function GenSummary(){
    return (
        <div>
         <Typography variant="h4" color='charcoal' fontWeight= '500'>
          Generator P&L
          </Typography>

        <Box sx={{ width: '100%',backgroundColor:'lightgray' }}>
            <Grid container spacing={1} style={{ paddingLeft:'15px',paddingBottom:'8px' }}>
  
                <Grid item xs={3}>
                <UnitSelectorDynamic /> 
                </Grid>

                <Grid item xs={2}>
                    <AOSelector /> 
                </Grid>

            <Grid item xs={2} style={{ paddingLeft:'8px',paddingTop:'12px' }}> 
                    <ReactDatePicker /> 
                </Grid>

            <HtmlTooltip
              title={
              <React.Fragment>
                <Typography color="inherit">Dev comments:</Typography>
                {"These top selectors can filter to limit data called by API"}
              </React.Fragment>
                  }
                >
              <Button>Dev Comments</Button>
            </HtmlTooltip>
            
            </Grid>
        </Box>
          <br></br>
          <Grid container spacing={1} sx={{ paddingLeft:'15px' }}>
         
            <GenTabs />
           
          </Grid>
        
        </div>
      );
    }