import React from 'react'
import { Button } from 'react-bootstrap'
import useStateContext from '../hooks/useStateContext'
import TabComponent from './TabComponent'
import { useNavigate } from 'react-router-dom'

export default function ClinicLog() {
    const {context} = useStateContext()
    const navigate = useNavigate();

  return (
    <>
        <TabComponent/>
        {context.isDoctor 
        ?
            <Button variant="primary" className="ms-2" onClick={() => navigate("/Clinic-Visit-Form")} >
            Add Visit
            </Button>
        :''}
    </>
  )
}
