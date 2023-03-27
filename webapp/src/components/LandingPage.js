import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import CardComponent from './CardComponent'
import Center from './Center'

export default function LandingPage() {
  const navigate = useNavigate()

  const headStyle = {
    marginTop: '100px',
    marginBottom: '50px'
  }

  return (
    <div>
      <div className='text-center' style={headStyle} >
        <Logo size='60px'/>
      </div>
      <Container >
        <Row className="justify-content-md-center">
          <Col md="auto">
            <CardComponent title='Doctor' identity='doctor' clickHandler={() => navigate('/doctor-login')} pic="Doctor1.png"/>
          </Col>
          <Col md="auto">
            <CardComponent title='Patient' identity='patient' clickHandler={() => navigate('/patient-login')} pic="Patient.jpg"/>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
