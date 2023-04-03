import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SuccessRegister() {
    const navigate = useNavigate()
  return (
    <div style={{width: "50%"}} className='mx-auto'>
      <Card style={{ width: '18rem'}} className='container d-flex align-items-center justify-content-center'>
        <Card.Img variant="top" src="success240.png" />
        <Card.Body>
            <Card.Title>Registration Successful</Card.Title>
            <Button variant="primary" onClick={() => navigate('/')}>Log in</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
