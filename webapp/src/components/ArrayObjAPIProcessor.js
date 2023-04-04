import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import useStateContext from '../hooks/useStateContext';
import { VerticalTable } from './TableComponent';

export default function ArrayObjAPIProcessor({dtoFilter, action}) {
    const { context } = useStateContext();
    const [headers, setHeaders] = useState([]);
    const [values, setValues] = useState([]);
  
    // load data from API
    useEffect(() => {
      action(context.sin)
        .then(res => {
          const {headers, values} = dtoFilter(res.data);
          setHeaders(headers);
          setValues(values);
        })  
        .catch(err => {
          console.log(err);
        })
    }, [])
  
    return (
      <Container>
        <VerticalTable header={headers} val={values} />
      </Container>
    )
}
