import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import useStateContext from '../hooks/useStateContext';
import { userDTO } from './data/userDTO';
import { HorizontalTable } from './TableComponent';

export default function Profile() {
  const { context} = useStateContext();
  const [user, GetUser] = useState('')

  // load data from API
  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.user)
      .fetchById(context.sin)
      .then(res => {
          GetUser(res.data)
        })
        .catch(err => {
          // setSub(true)
          // setValues({email: '', password: '', isDoctor: context.isDoctor})
        })
  },[])
      
  // Processing
  const {headers, values} = userDTO(user)

  return (
    <Container><HorizontalTable val ={values} header={headers} /></Container>
  )
}
