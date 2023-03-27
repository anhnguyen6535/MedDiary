import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import NavBarComponent from './NavBarComponent'

export default function Layout() {
  return (
    <>
      <NavBarComponent/>

      <Container>
        <Outlet/>
      </Container>
    </>
  )
}
