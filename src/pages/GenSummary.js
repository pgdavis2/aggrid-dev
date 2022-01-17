import './pageStyles.css'
import GenTabs from '../components/GenTabs';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import UnitSelector from '../components/Selectors/UnitSelector';
import ReactDatePicker from '../components/Selectors/ReactDatePicker';

export default function GenSummary(){
    return (
        <div>
         <a href={"https://confluence.powercosts.com/display/PCI/PLA+MISO+App+Design+Details"}>  <h2>Generator P&L</h2></a>
        <Box >
            <Grid container spacing={1} style={{ paddingLeft:'10px' }}>
         
                <Grid item xs={3}>
                    <UnitSelector /> 
                </Grid>
                
                <Grid item xs={4}> 
                    <ReactDatePicker /> 
                </Grid>
            
            </Grid>
        </Box>
          
          <Grid container spacing={1} sx={{ paddingLeft:'15px' }}>
         
            <GenTabs />
           
          </Grid>
        
        </div>
      );
    }