import React from 'react';
import { Container } from "react-bootstrap";
//import { filterObjList } from "./data/ListFilter";
import { HorizontalTable, VerticalTable } from './TableComponent';
import Medication from './Medication';
import LabResults from './LabResults';
import MedByDate from './MedByDate';


export default function ClinicVisitExpanded() {

    // FIXME FAKE DATA 
    const clinicdata = [
        {
            Date: "23/03/2023",
            ClinicName: "asd",
            Pysician: "Dr.bob",
            Diagnosis: "flu"
          },
    ]

    return(
        <Container>
            <MedByDate date = {clinicdata[0].Date}></MedByDate>
           
        </Container>
    )
}