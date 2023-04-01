import React from 'react';
import { Container } from "react-bootstrap";
import { filterObjList } from "./data/ListFilter";
import { VerticalTable, VerticalTableLink } from './TableComponent';


export default function ClinicVisit() {

    // FIXME FAKE DATA 
    const clinicdata = [
        {
            Date: "01/30/2023",
            ClinicName: "asd",
            Pysician: "Dr.bob"
          },
          {
            Date: "04/26/2022",
            ClinicName: "rand clinic",
            Pysician: "Dr.joe"
          },
          {
            Date:"12/6/2021",
            ClinicName: "bob clinic",
            Pysician: "Dr.basdasd"
          },
          {
            Date: "01/30/2020",
            ClinicName: "miltown manor",
            Pysician: "Dr.bsdsd"
          },
          {
            Date: "01/0/2020",
            ClinicName: "cross clinic",
            Pysician: "Dr.xxxxxxx"
          }
    ]

    const {headers, values} = filterObjList(clinicdata)

    return(
        <Container>
            <VerticalTableLink header={headers} val = {values} />
        </Container>
    )
}