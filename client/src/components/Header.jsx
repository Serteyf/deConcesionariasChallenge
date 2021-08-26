import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom";

export default function Header() {
    return(
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">deConcesionarias</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/" >Dashboard</Nav.Link>
                        <NavDropdown title="Vehicles" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/vehicles">List all vehicles</NavDropdown.Item>
                            <NavDropdown.Item href="/vehicles/add">Add a vehicle</NavDropdown.Item>
                            <NavDropdown.Item href="/vehicles/edit">Edit a vehicle</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Properties" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/properties">List all properties</NavDropdown.Item>
                            <NavDropdown.Item href="/properties/add">Add a property</NavDropdown.Item>
                            <NavDropdown.Item href="/properties/edit">Edit a property</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}