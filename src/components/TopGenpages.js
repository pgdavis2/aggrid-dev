import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/pageStyles.css'

import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap';

export default function TopGenpages(){
    return (
    <div>
        
        
        <Nav> <span style={{fontWeight: 600, fontSize:"20px",paddingTop:'4px'}}> Generator Pages:</span>
            <Nav.Link style={{fontWeight: 600}} id='gen-nav' href="DartPL">DA-RT</Nav.Link>
            <Nav.Link style={{fontWeight: 600}} id='gen-nav' href="DaTest1">Day-Ahead</Nav.Link>
            
            <NavDropdown style={{fontWeight: 600}}id='gen-nav' title="Real-Time" >
                <NavDropdown.Item href="DaTest1" >DATest</NavDropdown.Item>
                <NavDropdown.Item  href="DartPL">DART P&L</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown style={{fontWeight: 600}} id='gen-nav' title="GFA" >
                <NavDropdown.Item href="DaTest1" >GFA P&L</NavDropdown.Item>
                <NavDropdown.Item  href="DartPL">GFA Rebates</NavDropdown.Item>
            </NavDropdown>

        </Nav>
    
       
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
