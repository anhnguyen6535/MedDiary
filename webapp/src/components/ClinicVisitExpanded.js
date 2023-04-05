import React from 'react';
import { Container } from "react-bootstrap";
//import { filterObjList } from "./data/ListFilter";
import { HorizontalTable, VerticalTable } from './TableComponent';
import Medication from './Medication';
import LabResults from './LabResults';
import MedByDate from './MedByDate';
import { useLocation } from 'react-router-dom';


export default function ClinicVisitExpanded() {
    const date = useLocation().state.date
    const sin = useLocation().state.sin

    console.log(date, sin);
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
            <MedByDate date = {date} sin={sin}></MedByDate>
           
        </Container>
    )
}