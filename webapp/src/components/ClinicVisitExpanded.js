import React from 'react';
import { Container } from "react-bootstrap";
import { filterObjList } from "./data/ListFilter";
import { HorizontalTable, VerticalTable } from './TableComponent';
import Medication from './Medication';
import LabResults from './LabResults';


export default function ClinicVisitExpanded() {

    // FIXME FAKE DATA 
    const clinicdata = [
        {
            Date: "01/30/2023",
            ClinicName: "asd",
            Pysician: "Dr.bob",
            Diagnosis: "flu"
          },
    ]

    const headers = Object.keys(clinicdata[0]);

    //Todo list not implemented

    return(
        <Container>
            <HorizontalTable  val={Object.values(clinicdata[0])} header={headers} />
            <Medication/>
            <LabResults/>
        </Container>
    )
}