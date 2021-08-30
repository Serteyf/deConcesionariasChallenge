import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom";
import '../App.css'

export default function Header() {
    return(
        <Router>
            <Navbar  bg="light" expand="lg">
                <Container style={{background: 'black'}}className="c _header justify-content-around">
                    <Navbar.Brand style={{color: 'white'}} href="/">deConcesionarias</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="flex-grow-0"id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-evenly" style={{width: '25vw'}}>
                        <NavDropdown style={{color: 'white'}} className="brand" title="Vehículos" id="basic-nav-dropdown">
                            <NavDropdown.Item  href="/vehicles">Todos los Vehiculos</NavDropdown.Item>
                            <NavDropdown.Item  href="/vehicles/add">Añade un vehiculo</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown style={{color: 'white'}} className="brand" title="Propiedades" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/properties">Todas las propiedades</NavDropdown.Item>
                            <NavDropdown.Item href="/properties/add">Añade una propiedad</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}