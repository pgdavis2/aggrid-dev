import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DartPL from './pages/DartPL';
import DaPL from './pages/DaPL';
import Home from './pages/Home';
import Load1 from './pages/Load1';
import MultilevelSideNav from './components/Sidenav/MultilevelSideNav';
import {menuData} from './components/Sidenav/menudata.json';
import DaRsg from './pages/DaRsg'
import DaTest1 from './pages/DaTest1'
import GenSummary from './pages/GenSummary'
import PortfolioSummary from './pages/PortfolioSummary'



const App = () => {

  const [sideNavState,setSideNavState] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <Router > */}
      <Router BrowserRouter basename={process.env.PUBLIC_URL}>
        <MultilevelSideNav sideNavState={sideNavState} sideNavHandler={setSideNavState} data={menuData} />
        <div style={{marginLeft:(sideNavState)?'160px':'0'}}>
        <div>
          <span style={{fontSize:'30px',cursor:'pointer',float:'left',display:'inline-block', paddingRight: '1px'}} onClick={e=>setSideNavState(true)}>&#9776;
            </span>  
          
                      {/* <button onClick={() => setShow(true)}>Show Modal</button>
                        <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                        <TableDatePicker3 />
                        </Modal> */}
          </div>  
          <Routes> 
          <Route exact path="/page/PortfolioSummary" element={<PortfolioSummary />}>
             <PortfolioSummary />
          </Route>

          <Route path="/page/GenSummary" element={<GenSummary />}>
             <GenSummary />
          </Route>
          
          <Route exact path="/page/Load1" element={<Load1 />}>
             <Load1 />
          </Route>

          <Route exact path="/page/DartPL" element={<DartPL />}>
             <DartPL />
          </Route>
          
          <Route exact path="/page/DaTest1" element={<DaTest1 />}>
             <DaTest1 />
          </Route>

          <Route exact path="/page/DaPL" element={<DaPL />}>
             <DaPL />
          </Route>

          <Route exact path="/page/DaRsg" element={<DaRsg />}>
             <DaRsg />
          </Route>

          <Route exact path="/" element={<Home />}>
             <Home />
          </Route>
          
        </Routes>
        </div>        
      </Router>
    </div>
  );
}

export default App;
