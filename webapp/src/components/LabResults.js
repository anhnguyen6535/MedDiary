import React from 'react'
import { Container } from 'react-bootstrap'
import { filterObjList } from './data/ListFilter'
import { VerticalTable } from './TableComponent'

export default function LabResults() {
   // FIXME FAKE DATA
  const labList = [
    {
        date: "28/03/2002",
        lab: "ABC",
        service: "Blood Type Test",
        result: "A+",
        notes: ""
    },
    {
        date: "28/03/2002",
        lab: "EFG",
        service: "XRay",
        result: "Clear",
        notes: ""
    },
  ] 

  const {headers, values} = filterObjList(labList)

  return (
    <Container>
        <VerticalTable header={headers} val={values} />
    </Container>
  )
}
