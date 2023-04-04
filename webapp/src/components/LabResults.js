import React from 'react'
import { ENDPOINTS } from '../api'
import ArrayObjAPIProcessor from './ArrayObjAPIProcessor'
import { labDTO } from './patients/PatientDTO'

export default function LabResults() {

  return (
    <ArrayObjAPIProcessor apiPath={ENDPOINTS.lab} dtoFilter={(e) => labDTO(e)}/>
  )
}
