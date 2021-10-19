import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">COPYRIGHT &copy; 2021 RAHMAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Help</Nav.Link>
                        <Nav.Link href="#deets">More us</Nav.Link>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Footer;