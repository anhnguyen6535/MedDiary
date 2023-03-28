import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import useStateContext from '../hooks/useStateContext';
import Logo from './Logo';

export default function NavBarComponent() {
  const { context, setContext, resetContext } = useStateContext();
  const navigate = useNavigate()

  const logout = () => {
    resetContext()
    navigate('/')
  }

  return (
    <Navbar style={{backgroundColor: '#36424A'}} variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home"><Logo size='xxx-large'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Profile" id="basic-nav-dropdown" style={{fontSize: '25px'}}>
              <NavDropdown.Item href="#action/3.1">Information</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Todo List</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Clinic Log" id="basic-nav-dropdown" style={{fontSize: '25px'}}>
              <NavDropdown.Item href="#action/3.1">Clinic Visits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Medication</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lab Results</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button variant="outline-success" onClick={logout}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
