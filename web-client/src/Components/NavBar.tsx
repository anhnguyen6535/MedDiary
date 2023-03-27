import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate()
    
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand onClick={() => navigate('/profile')}>
                <span className="logo">MedDiary</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Profile" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => navigate('/profile')}>Medical History</Nav.Link>
                <Nav.Link onClick={() => navigate('/profile')}>Todo List</Nav.Link>
                <Nav.Link onClick={() => navigate('/profile')}>Clinic Log</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}