import React from 'react'
import { useLocation } from 'react-router-dom';
import useStateContext from '../../hooks/useStateContext';

export default function DoctorRegister() {
    const location = useLocation();
    console.log(location.state);
  return (
    <div>DoctorRegister</div>
  )
}
