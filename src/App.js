import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MultilevelSideNav from './components/Sidenav/MultilevelSideNav';
import {menuData} from './components/Sidenav/menudata.json';
import './App.css';
import Home from './pages/Home';
import GenSummary from './pages/GenSummary'
import WeatherAPI from './pages/WeatherAPI'

const App = () => {

  const [sideNavState,setSideNavState] = useState(false);

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

            <Route path="/page/GenSummary" element={<GenSummary />}></Route>
            
            <Route path="/page/WeatherAPI" element={<WeatherAPI />}></Route>
         </Routes>
       
        </div>        
      </Router>
    </div>
  );
}

export default App;
