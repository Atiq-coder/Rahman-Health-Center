import React from 'react';
import { Container, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Footer = () => {
    return (
        // Footer 
        // <div className="bg-dark">
        //     <div className="container">
        //         <p className="text-center text-secondary p-3">COPYRIGHT &copy; 2021 AHMAD ENGLISH ACADEMY BANGLADESH. ALL RIGHTS RESERVED</p>
        //     </div>
        // </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">COPYRIGHT &copy; 2021 RAHMAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Footer;