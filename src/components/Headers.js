import React, { useState } from 'react';
import { PropTypes } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'


// import { HeaderContainer } from "./base";

export const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                <h1>Bitcoin is an NFT</h1>
                  We literally made the bitcoin blockchain into an NFT. You can now own bitcoin blocks.
            </span>
            <br/>
            <span className="header-text">

            </span>
            <div>
            <b>Every block you mint gives you nftBTC token rewards.</b>
            </div>
            
        </div>
    );
}

export const Navigation = () => {
  return(
    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">BTC Blocks NFT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
  </Navbar>
);
}


export const NavigationBak = () => {
  return(
    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">BTC Blocks NFT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
