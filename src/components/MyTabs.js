import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import ChartCrossfilter from '../pages/ChartCrossfilter';
import ChartSeparate from '../pages/ChartSeparate';

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

export default function MyTabs({ myunit, setmyunit }) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="SeparateChart" {...a11yProps(0)} />
          <Tab label="Cross Filtered Chart" {...a11yProps(1)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ChartSeparate {...{ myunit, setmyunit }} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChartCrossfilter {...{ myunit, setmyunit }} />
      </TabPanel>

    </Box>
  );
}
