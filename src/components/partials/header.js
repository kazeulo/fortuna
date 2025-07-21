
// Header.js

import React from 'react';
import './../../css/partials/header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header className='header'>
            <Navbar expand="lg" className="bg-body-tertiary navbar">
                <Container>
                    <Navbar.Brand href="#home">Fortuna</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Dashboard</Nav.Link>
                        <Nav.Link>Transactions</Nav.Link>
                        <Nav.Link>Savings</Nav.Link>
                        <Nav.Link>Investments</Nav.Link>
                        <Nav.Link>Wallets</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;