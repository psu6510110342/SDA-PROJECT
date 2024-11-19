import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar'; // Renamed imported Navbar
import { AuthContext } from "../context/authContext.jsx";

const CustomNavbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    return (
        <div className='nav-new'>
            <NavbarBootstrap collapseOnSelect expand="lg" className="navbar navbar-dark bg-transparent">
                <Container fluid style={{ backgroundColor: "#112D4E", padding: "0" }}>
                    <NavbarBootstrap.Brand href="/"> BLOG-APP</NavbarBootstrap.Brand>
                    <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
                    <NavbarBootstrap.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/?cat=art">ART</Nav.Link>
                            <Nav.Link href="/?cat=science">SCIENCE</Nav.Link>
                            <Nav.Link href="/?cat=technology">TECHNOLOGY</Nav.Link>
                            <Nav.Link href="/?cat=cinema">CINEMA</Nav.Link>
                            <Nav.Link href="/?cat=design">DESIGN</Nav.Link>
                            <Nav.Link href="/?cat=food">FOOD</Nav.Link>
                        </Nav>
                        <Nav>
                            {currentUser ? <Nav.Link onClick={logout} href="/login">logout</Nav.Link> : <Nav.Link href="/login">login</Nav.Link>}
                            <Nav.Link >{currentUser?.username || "guest"}</Nav.Link>
                            {currentUser ? <Nav.Link href="/write">Write</Nav.Link> : <Nav.Link></Nav.Link>}
                        </Nav>
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap>

        </div>
    );
}

export default CustomNavbar;
