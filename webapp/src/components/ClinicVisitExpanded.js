import React from 'react';
import { Button, Container } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import ArrayObjAPIProcessor, { ArrayObjAPIProcessorH } from './ArrayObjAPIProcessor';
import { clinicVisitDTOH, medicaionDTO } from './patients/PatientDTO'
import { createAPIEndpoint, ENDPOINTS } from '../api'

export default function ClinicVisitExpanded() {
    const navigate = useNavigate()
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

            <Button variant='outline-primary' onClick={() => navigate("/clinic-log")} style={{marginTop: "2%"}}>Back</Button>
           
        </Container>
    )
}