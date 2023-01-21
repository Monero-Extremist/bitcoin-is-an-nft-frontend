import React, { useState } from 'react';
import { PropTypes } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { HeaderContainer } from "./base";

export const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Bitcoin is an NFT
            </span>
            <br/>
            <span className="header-text">
                We literally made the bitcoin blockchain into an NFT. You can now own bitcoin blocks.
            </span>
        </div>
    );
}
