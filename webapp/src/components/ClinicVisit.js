import React, { useContext, useEffect } from 'react';
import { Container, Button } from "react-bootstrap";
import { filterObjList } from "./helperModules/helper";
import useStateContext from '../hooks/useStateContext';
import { useNavigate } from 'react-router-dom';
import {ArrayObjAPIProcessorLink} from './ArrayObjAPIProcessor';
import { clinicVisitDTO } from './patients/PatientDTO'
import { createAPIEndpoint, ENDPOINTS } from '../api'

export default function ClinicVisit() {
    const {context} = useStateContext()
    const navigate = useNavigate()

    function handler(date,clinicId) {
      navigate('/Clinic-Visit-Expanded',{state: {
        sin: context.isDoctor ?context.patientSin :context.sin,
        date,
        clinicId
      }})
    }

    return(
      <ArrayObjAPIProcessorLink  handler = {handler} dtoFilter={(e) => clinicVisitDTO(e)} action={(a) => createAPIEndpoint(ENDPOINTS.clinicVisit)
        .fetchById( "patient?patientid=" + context.sin)}/>)
}