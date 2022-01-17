import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DaTest1 from '../pages/DaTest1';
import DartPL from '../pages/DartPL';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GenTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable"
  scrollButtons allowScrollButtonsMobile aria-label="basic tabs example">
          <Tab label="DART P&L" {...a11yProps(0)} />
          <Tab label="DA P&L" {...a11yProps(1)} />
          <Tab label="DA AS" {...a11yProps(2)} />
          <Tab label="DA RSG" {...a11yProps(3)} />
          <Tab label="RT AS" {...a11yProps(4)} />
          <Tab label="RT Misc" {...a11yProps(5)} />
          <Tab label="Reg Mileage" {...a11yProps(6)} />
          <Tab label="RT Reg" {...a11yProps(7)} />
          <Tab label="GFA Adjustment" {...a11yProps(8)} />
          <Tab label="GFA Rebate" {...a11yProps(9)} />
          <Tab label="RT Dispatch" {...a11yProps(10)} />
          <Tab label="P&L Performance" {...a11yProps(11)} />
          <Tab label="PV MWP" {...a11yProps(12)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={7}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={8}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={9}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={10}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={11}>
      <DaTest1 />
      </TabPanel>
      <TabPanel value={value} index={12}>
      <DaTest1 />
      </TabPanel>
    </Box>
  );
}
