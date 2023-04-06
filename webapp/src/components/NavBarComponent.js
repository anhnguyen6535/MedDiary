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

  const clinicLogDirect = () => {
    context.isDoctor ? navigate('/search-patient')
                     : navigate('/clinic-log')
  }

  return (
    <Navbar style={{backgroundColor: '#36424A'}} variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home"><Logo size='xxx-large'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <>
                <Nav.Link onClick={() => navigate('/profile')} style={{fontSize: '25px'}}>Profile</Nav.Link>
                <Nav.Link onClick={clinicLogDirect} style={{fontSize: '25px'}}>Clinic log</Nav.Link>
                {context.isDoctor ?'' :<Nav.Link onClick={() => navigate('/todo')} style={{fontSize: '25px'}}>Todo list</Nav.Link>}
              </>
          </Nav>

          <Button variant="outline-success" onClick={logout}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
