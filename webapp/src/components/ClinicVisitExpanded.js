import React, { useEffect, useState } from 'react';
import { Card, Container } from "react-bootstrap";
//import { filterObjList } from "./data/ListFilter";
import { HorizontalTable, VerticalTable } from './TableComponent';
import Medication from './Medication';
import LabResults from './LabResults';
import MedByDate from './MedByDate';
import { useLocation } from 'react-router-dom';
import ClinicVisit from './ClinicVisit';
import ArrayObjAPIProcessor, { ArrayObjAPIProcessorH } from './ArrayObjAPIProcessor';
import { clinicVisitDTOH, medicaionDTO } from './patients/PatientDTO'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext';

export default function ClinicVisitExpanded() {
    const {context} = useStateContext()
    const date = useLocation().state.date
    const sin = useLocation().state.sin
    const visitId = useLocation().state.visitId
    const medByDateDTO = {
        Date: date,
        PatientSin: sin
    }

    return(
        <Container>
            
            <ArrayObjAPIProcessorH title={'Clinic Visit Information'} dtoFilter={(e) => clinicVisitDTOH(e)} action={(a) => createAPIEndpoint(ENDPOINTS.clinicVisit)
        .fetchById(visitId)}/>

            <ArrayObjAPIProcessor title={'Medication'} dtoFilter={(e) => medicaionDTO(e)} action={(a) => createAPIEndpoint(ENDPOINTS.medicaion)
                    .customizePost(medByDateDTO, 'Date')}/>
           
        </Container>
    )
}