import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Load1 from './pages/Load1';
import MultilevelSideNav from './components/Sidenav/MultilevelSideNav';
import {menuData} from './components/Sidenav/menudata.json';
import DaRsg from './pages/DaRsg'
import GenSummary from './pages/GenSummary'
import PortfolioSummary from './pages/PortfolioSummary'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const App = () => {

  const [sideNavState,setSideNavState] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <Router > */}
      <Router BrowserRouter basename={process.env.PUBLIC_URL}>
        <MultilevelSideNav sideNavState={sideNavState} sideNavHandler={setSideNavState} data={menuData} />
        <div style={{marginLeft:(sideNavState)?'160px':'0'}}>
      
        <span style={{fontSize:'25px',cursor:'pointer',float:'left',paddingRight:'10px'}} 
          onClick={e=>setSideNavState(true)}>&#9776;
        </span>      
        

         <Routes> 
            <Route exact path="/" element={<Home />}></Route>

            <Route exact path="/page/PortfolioSummary" element={<PortfolioSummary />}></Route>

            <Route path="/page/GenSummary" element={<GenSummary />}></Route>
            
            <Route exact path="/page/Load1" element={<Load1 />}></Route>

            <Route exact path="/page/DartPL" element={<GenSummary />}></Route>
            
          
            <Route exact path="/page/DaRsg" element={<DaRsg />}></Route>

         </Routes>
       
        </div>        
      </Router>
    </div>
  );
}

export default App;
