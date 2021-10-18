import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Rahman Health Center</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link className="link" to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/services">Services</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/node_modulesfeatures">Features</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/pricing">Pricing</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;