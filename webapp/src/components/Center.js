import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Center(prop) {
  return (
    <Container>
        <Row className="justify-content-md-center">
            {/* <Col md="auto">{prop.children}</Col> */} 
        </Row>
    </Container>
  )
}
