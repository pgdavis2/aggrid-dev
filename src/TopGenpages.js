import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/pageStyles.css'

import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap';

export default function TopGenpages(){
    return (
    <div>
        
        
            <Nav   > <span style={{fontWeight: "bold",paddingTop:'8px'}}> Generator Pages:</span>
                <Nav.Link id='gen-nav' href="/page/DartPL">DA-RT</Nav.Link>
                <Nav.Link id='gen-nav' href="DaTest1">Day-Ahead</Nav.Link>
                
                <NavDropdown id='gen-nav' title="Real-Time" >
                    <NavDropdown.Item href="/page/DaTest1" >DATest</NavDropdown.Item>
                    <NavDropdown.Item  href="/page/DartPL">DART P&L</NavDropdown.Item>
                </NavDropdown>
               
                <NavDropdown id='gen-nav' title="GFA" >
                    <NavDropdown.Item href="/page/DaTest1" >GFA P&L</NavDropdown.Item>
                    <NavDropdown.Item  href="/page/DartPL">GFA Rebates</NavDropdown.Item>
                </NavDropdown>

            </Nav>
    
       
        <br />

{/* Plain links */}
{/* <Nav >
  <Nav.Item as="li">
    <Nav.Link href="/page/DartPL">DART PL</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/page/DaTest1">DA</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav> */}
</div>
    )
}
