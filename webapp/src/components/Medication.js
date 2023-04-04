import React from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api';
import ArrayObjAPIProcessor from './ArrayObjAPIProcessor';
import { medicaionDTO } from './patients/PatientDTO';

export default function Medication() {

  return (
    <ArrayObjAPIProcessor dtoFilter={(e) => medicaionDTO(e)} action={(a) => createAPIEndpoint(ENDPOINTS.medicaion)
      .fetchById(a)}/>
  )
}
