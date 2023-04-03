import React from 'react'
import { Container } from 'react-bootstrap';
import { filterObjList } from './data/helper';
import { VerticalTable } from './TableComponent';

export default function Medication() {

  // FIXME FAKE DATA
  const medList = [
    {
        date: "28/03/2002",
        name: "ABC",
        duration: "14 days",
        dosage: "1 morning 1 night"
    },
    {
        date: "28/03/2002",
        name: "EFG",
        duration: "14 days",
        dosage: "1 morning 1 night"
    },
  ] 

  // filterObjList convert object to 2 arrays called headers and values
  const {headers, values} = filterObjList(medList)

  return (
    <Container>
        <VerticalTable header={headers} val={values} />
    </Container>
  )
}
