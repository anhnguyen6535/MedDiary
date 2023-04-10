import React from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext'
import ArrayObjAPIProcessor from './ArrayObjAPIProcessor'
import { medicaionDTO } from './patients/PatientDTO'

export default function MedByDate({date, sin}) {
    const medByDateDTO = {
        Date: date,
        PatientSin: sin
    }

  return (
    <ArrayObjAPIProcessor dtoFilter={(e) => medicaionDTO(e)} action={(a) => createAPIEndpoint(ENDPOINTS.medicaion)
        .customizePost(medByDateDTO, 'Date')}/>
  )
}
