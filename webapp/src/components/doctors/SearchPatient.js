import React from 'react'
import { Container } from 'react-bootstrap'

export default function SearchPatient() {

  return (
    <Container className='container d-flex justify-content-center text-center' style={{width:'60%', height: '600px'}}>
        <div className='search'>
            <input type="text" placeholder="Search Patient Id"/>
            <button type="submit">
            <img src='add48.png' alt="buttonpng" border="0" />
            </button>
        </div>
    </Container>
  )
}
