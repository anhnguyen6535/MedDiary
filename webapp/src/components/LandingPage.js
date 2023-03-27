import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <>
      <Logo/>
      <div>
        <Button onClick={() => navigate('/patient-login')}>Patient</Button>
        <Button onClick={() => navigate('/doctor-login')}>Doctor</Button>
      </div>
    </>
  )
}
