import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home" className="logo">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Personal Info</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Medical History
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Todo List</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Log out
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Clinic Log</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}