import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useStateContext from '../hooks/useStateContext'

export default function IdentityCheck() {
    const { context } = useStateContext()

    return (
        context.isDoctor == undefined
            ? <Navigate to="/" />
            : <Outlet />
    )
}
