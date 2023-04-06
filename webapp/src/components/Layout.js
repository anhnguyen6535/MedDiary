import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarComponent from './NavBarComponent'

export default function Layout() {
  return (
    <>
      <NavBarComponent/>
      <Outlet/>
    </>
  )
}
