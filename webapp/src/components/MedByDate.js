import React from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext'
import ArrayObjAPIProcessor from './ArrayObjAPIProcessor'
import { medicaionDTO } from './patients/PatientDTO'

export default function MedByDate({date}) {
    const {context} = useStateContext()
    const medByDateDTO = {
        Date: date,
        PatientSin: context.sin
    }

  return (
    <ArrayObjAPIProcessor dtoFilter={(e) => medicaionDTO(e)} action={(a) => createAPIEndpoint(ENDPOINTS.medicaion)
        .customizePost(medByDateDTO, 'Date')}/>
  )
}
