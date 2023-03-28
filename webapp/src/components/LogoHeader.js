import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Center from './Center'
import Logo from './Logo'

export default function LogoHeader() {
    const headStyle = {
        marginTop: '100px',
        marginBottom: '50px'
      }

      
  return (
    <Center>
        <Container style={{border: '2px solid red'}}>
            <div className='text-center' style={headStyle} >
                <Logo size='60px'/>
            </div>
            <Container style={{border: '2px solid red'}}>
                <Outlet/>
            </Container>
        </Container>
        
    </Center>
  )
}
