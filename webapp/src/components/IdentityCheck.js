import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useStateContext from '../hooks/useStateContext'

export default function IdentityCheck({cond}) {
    const { context } = useStateContext()

    return (
        context.isDoctor == cond
            ? <Navigate to="/" />
            : <Outlet />
    )
}
