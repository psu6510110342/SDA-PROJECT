import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";

function Navbarr() {
    return (
        <div className='nav-new'>
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark bg-transparent">
                <Container className='py-2 px-3' style={{ backgroundColor: "#112D4E" }}>
                    <Navbar.Brand href="#home">BLOG-APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/?cat=art">ART</Nav.Link>
                            <Nav.Link href="/?cat=science">SCIENCE</Nav.Link>
                            <Nav.Link href="/?cat=technology">TECHNOLOGY</Nav.Link>
                            <Nav.Link href="/?cat=cinema">CINEMA</Nav.Link>
                            <Nav.Link href="/?cat=design">DESIGN</Nav.Link>
                            <Nav.Link href="/?cat=food">FOOD</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/write">Logout</Nav.Link>
                            <Nav.Link href="/write">Login</Nav.Link>
                            <Nav.Link href="/write">Write</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarr;