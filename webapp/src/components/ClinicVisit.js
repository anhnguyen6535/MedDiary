import React from 'react';
import useStateContext from '../hooks/useStateContext';
import { useNavigate } from 'react-router-dom';
import {ArrayObjAPIProcessorLink} from './ArrayObjAPIProcessor';
import { clinicVisitDTO } from './patients/PatientDTO'
import { createAPIEndpoint, ENDPOINTS } from '../api'

export default function ClinicVisit() {
    const {context} = useStateContext()
    const navigate = useNavigate()
    const sin = context.isDoctor ?context.patientSin :context.sin

    function handler(date,visitId) {
      navigate('/Clinic-Visit-Expanded',{state: {
        sin,
        date,
        visitId
      }})
    }

    return(
      <ArrayObjAPIProcessorLink  handler = {handler} dtoFilter={(e) => clinicVisitDTO(e)} action={(a) => createAPIEndpoint(ENDPOINTS.clinicVisit)
        .fetchById( "patient?patientid=" + sin)}/>)
}