import React from 'react';
import { Container } from "react-bootstrap";
//import { filterObjList } from "./data/ListFilter";
import { HorizontalTable, VerticalTable } from './TableComponent';
import Medication from './Medication';
import LabResults from './LabResults';
import MedByDate from './MedByDate';
import { useLocation } from 'react-router-dom';
import ClinicVisit from './ClinicVisit';
import { ArrayObjAPIProcessorH } from './ArrayObjAPIProcessor';
import { clinicVisitDTOH } from './patients/PatientDTO'
import { createAPIEndpoint, ENDPOINTS } from '../api'


export default function ClinicVisitExpanded() {
    const date = useLocation().state.date
    const sin = useLocation().state.sin

    console.log(date, sin);

    return(
        <Container>
            

            <MedByDate date = {date} sin={sin}></MedByDate>
           
        </Container>
    )
}