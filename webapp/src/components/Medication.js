import React from 'react'
import { ENDPOINTS } from '../api';
import ArrayObjAPIProcessor from './ArrayObjAPIProcessor';
import { medicaionDTO } from './data/userDTO';

export default function Medication() {

  return (
    <ArrayObjAPIProcessor apiPath={ENDPOINTS.medicaion} dtoFilter={(e) => medicaionDTO(e)}/>
  )
}
