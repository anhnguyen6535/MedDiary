import React, { useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import useStateContext from '../hooks/useStateContext';
import { filterObjList } from './data/helper';
import { medicaionDTO } from './data/userDTO';
import { VerticalTable } from './TableComponent';

export default function Medication() {
  const { context } = useStateContext();
  const [headers, setHeaders] = useState([]);
  const [values, setValues] = useState([]);

  // load data from API
  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.medicaion)
      .fetchById(context.sin)
      .then(res => {
        const {headers, values} = medicaionDTO(res.data);
        setHeaders(headers);
        setValues(values);
      })  
      .catch(err => {
        console.log(err);
        // setSub(true)
        // setValues({email: '', password: '', isDoctor: context.isDoctor})
      })
  }, [])

  return (

    <Container>
      <VerticalTable header={headers} val={values} />
    </Container>
  )
}
