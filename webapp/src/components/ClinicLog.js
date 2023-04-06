import React from 'react'
import { Button } from 'react-bootstrap'
import useStateContext from '../hooks/useStateContext'
import TabComponent from './TabComponent'

export default function ClinicLog() {
    const {context} = useStateContext()

  return (
    <>
        <TabComponent/>
        {context.isDoctor 
        ?
            <Button variant="primary" className="ms-2" >
            Add Visit
            </Button>
        :''}
    </>
  )
}
