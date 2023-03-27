import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useStateContext from '../hooks/useStateContext'

export default function Authenticate() {
    const { context } = useStateContext()

    return (
      //  console.log(context.userId)
        context.userId == 0
            ? <Navigate to="/" />
            : <Outlet />
    )
}