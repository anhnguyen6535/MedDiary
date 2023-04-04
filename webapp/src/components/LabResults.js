import React from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import ArrayObjAPIProcessor from './ArrayObjAPIProcessor'
import { labDTO } from './patients/PatientDTO'

export default function LabResults() {

  return (
    <ArrayObjAPIProcessor dtoFilter={(e) => labDTO(e)} action={(a) => createAPIEndpoint(ENDPOINTS.lab)
      .fetchById(a)}/>
  )
}
