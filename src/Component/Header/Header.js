import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';



const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="ps-1">RAHMAN HEALTH CENTER</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link><Link className="link" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/services">Services</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/doctors">Doctors</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/appointment">Appointment</Link></Nav.Link>
                            <Nav.Link><span>{user.displayName}</span></Nav.Link>
                            {
                                user.email ?
                                    <Button variant="secondary" onClick={logOut}>LogOut</Button>
                                    :
                                    <Nav.Link><Link className="link" to="/login">LogIn</Link></Nav.Link>}
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;