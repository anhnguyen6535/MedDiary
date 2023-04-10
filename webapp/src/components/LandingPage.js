import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardComponent from './CardComponent'
import useStateContext from '../hooks/useStateContext'

export default function LandingPage() {
  const {resetContext} = useStateContext();

  useEffect(() => {
    resetContext()
  }, [])

  return (
    <div>
      <Container >
        <Row className="justify-content-md-center">
          <Col md="auto">
            <CardComponent title='Doctor' isDoctor={true} pic="Doctor1.png"/>
          </Col>
          <Col md="auto">
            <CardComponent title='Patient' isDoctor={false} pic="Patient.jpg"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
