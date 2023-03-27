import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import CardComponent from './CardComponent'
import useStateContext from '../hooks/useStateContext'

export default function LandingPage() {
  const { context, setContext, resetContext } = useStateContext();
  const navigate = useNavigate()

  useEffect(() => {
    resetContext()
  }, [])

  return (
    <div>
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
