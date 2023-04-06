import React from 'react'
import { Button } from 'react-bootstrap'
import ClinicVisit from '../ClinicVisit'

export default function ClinicVisitView() {
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
    <>
        <ClinicVisit/>
        <Button variant="primary" className="ms-2" >
          Add Visit
        </Button>
    </>
  )
}
