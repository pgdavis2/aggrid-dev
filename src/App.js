import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DartPL from './pages/DartPL';
import DaPL from './pages/DaPL';
import Home from './pages/Home';
import Load1 from './pages/Load1';
import MultilevelSideNav from './components/Sidenav/MultilevelSideNav';
import {menuData} from './components/Sidenav/menudata.json';
import TableDatePicker from './components/Selectors/TableDatePicker'
import TableDatePicker2 from './components/Selectors/TableDatePicker2'
import TableDatePicker3 from './components/Selectors/TableDatePicker3'
import DaRsg from './pages/DaRsg'
import DaTest1 from './pages/DaTest1'
import GenSummary from './pages/GenSummary'
import Modal from "./components/Modal/Modal";


const App = () => {

  const [sideNavState,setSideNavState] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <Router > */}
      <Router BrowserRouter basename={process.env.PUBLIC_URL}>
        <MultilevelSideNav sideNavState={sideNavState} sideNavHandler={setSideNavState} data={menuData} />
        <div style={{marginLeft:(sideNavState)?'250px':'0'}}>
        <div>
          <span style={{fontSize:'30px',cursor:'pointer',float:'left',display:'inline-block', paddingRight: '1px'}} onClick={e=>setSideNavState(true)}>&#9776;
            </span>  
          
                      {/* <button onClick={() => setShow(true)}>Show Modal</button>
                        <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                        <TableDatePicker3 />
                        </Modal> */}
          </div>  
          <Switch> 
          <Route path="/page/GenSummary">
             <GenSummary />
          </Route>
          
          <Route path="/page/Load1">
             <Load1 />
          </Route>

          <Route path="/page/DartPL">
             <DartPL />
          </Route>
          
          <Route path="/page/DaTest1">
             <DaTest1 />
          </Route>

          <Route path="/page/DaPL">
             <DaPL />
          </Route>

          <Route path="/page/DaRsg">
             <DaRsg />
          </Route>

          <Route path="/">
             <Home />
          </Route>
          
        </Switch>
        </div>        
      </Router>
    </div>
  );
}

export default App;
