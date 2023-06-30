import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {navLinks} from "../constants";

const CNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {navLinks.map((link) => (
                        <NavDropdown href="www.youtube.com" title={link.title} key={link.id}>
                            {link.dropMenu.map((drop) => (
                                <NavDropdown.Item href={drop.href}>{drop.title}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    ))}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CNavbar