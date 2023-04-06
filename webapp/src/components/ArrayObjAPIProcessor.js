import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import useStateContext from '../hooks/useStateContext';
import { VerticalTable } from './TableComponent';

export default function ArrayObjAPIProcessor({dtoFilter, action}) {
    const { context } = useStateContext();
    const user = context.isDoctor ?context.patientSin :context.sin 
    const [display, setDisplay] = useState()

    // load data from API
    useEffect(() => {
      action(user)
        .then(res => {
          const {headers, values} = dtoFilter(res.data);
          setDisplay(<VerticalTable header={headers} val={values} />)
        })  
        .catch(err => {
          console.log(err);
          setDisplay(
            <p>No results found!</p>
          )
        })
    }, [])
  
    return (
      <Container>  
        {display}
      </Container>
    )
}
