import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import useStateContext from '../hooks/useStateContext';
import { HorizontalTable, VerticalTable } from './TableComponent';
import { VerticalTableLink } from './TableComponent';


export default function ArrayObjAPIProcessor({dtoFilter, action, title}) {
    const { context } = useStateContext();
    const user = context.isDoctor ?context.patientSin :context.sin 
    const [display, setDisplay] = useState()

    // load data from API
    useEffect(() => {
      action(user)
        .then(res => {
          const {headers, values} = dtoFilter(res.data);
          setDisplay(<VerticalTable header={headers} val={values} title={title}/>)
        })  
        .catch(err => {
          console.log(err);
          setDisplay(
            <Container className='d-flex justify-content-md-center' style={{marginTop: "10%"}}>
              <Container>
                {title != null ?<h4 style={{fontSize: '20px', fontWeight: "bold"}}>{title}</h4> :''}  
                <p>No results found!</p>
              </Container>
            </Container>
          )
        })
    }, [])
  
    return (
      <Container>  
        {display}
      </Container>
    )
}

export function ArrayObjAPIProcessorH({dtoFilter, action, title}) {
  const { context } = useStateContext();
  const user = context.isDoctor ?context.patientSin :context.sin 
  const [display, setDisplay] = useState()

  // load data from API
  useEffect(() => {
    action(user)
      .then(res => {
        const {headers, values} = dtoFilter(res.data);
        setDisplay(<HorizontalTable header={headers} val={values} title={title}/>)
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

export function ArrayObjAPIProcessorLink({dtoFilter, action, handler}) {
  const { context } = useStateContext();
  const user = context.isDoctor ?context.patientSin :context.sin 
  const [display, setDisplay] = useState()


  // load data from API
  useEffect(() => {
    action(user)
      .then(res => {
        const {headers, values} = dtoFilter(res.data);
        setDisplay(<VerticalTableLink header={headers} val={values} handler = {handler} />)
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
