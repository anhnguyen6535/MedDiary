import React from 'react'
import { Container } from 'react-bootstrap';
import useStateContext from '../hooks/useStateContext';
import { profile } from './patients/PatientDTO';
import TableComponent from './TableComponent';

export default function Profile() {
  const { context} = useStateContext();

  //FIXME: FAKE API DATA
  const profileP = { 
    firstname: 'Helen',
    lastname: "Max",
    email: "helenMax@gmail.com",
    ahs: "090909090909"
}

  const profileD = { 
    firstname: 'Mad',
    lastname: "Max",
    email: "madMax@gmail.com",
    pracID: "090909090909"
}

  // Processing
  const values = Object.values(context.isDoctor ?profileD :profileP)
  return (
    <Container><TableComponent val ={values} header={context.isDoctor ?profile :profile} /></Container>
  )
}
