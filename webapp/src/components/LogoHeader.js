import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Logo from './Logo'

export default function LogoHeader() {
    const headStyle = {
        marginTop: '100px',
        marginBottom: '50px'
      }

      
  return (
    <>
        <div className='text-center' style={headStyle} >
            <Logo size='60px'/>
        </div>
        <Container>
            <Outlet/>
        </Container>
    </>
  )
}
