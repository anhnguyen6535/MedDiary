import React from 'react'
import { useLocation } from 'react-router-dom'
import ClinicVisit from '../ClinicVisit'

export default function ClinicVisitView() {
    const sin = useLocation().state.sin 

    // WAIT FOR BACKEND
    // useEffect(() =>{
    //   createAPIEndpoint(ENDPOINTS.clinicVisit)
    //             .fetchById(sin)
    //             .then(res => {
                      // do something with the data
    //                 navigate('/Clinic-Visit-Expanded', {state:{sin: sin}})
    //             })
    //             .catch(err => {
    //               console.log('api failed');
    //             })
    // },[])


  return (
    <ClinicVisit sin={sin}/>
  )
}
