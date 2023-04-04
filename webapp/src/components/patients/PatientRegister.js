import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import useForm from '../../hooks/useForm';
import { patientGuardianReg, patientMaritualReg, patientRegLists } from '../data/RegisterLists';
import Forms from '../Forms';
import { useLocation, useNavigate } from 'react-router-dom'
import { register } from './patientAPI';
import useStateContext from '../../hooks/useStateContext';
import { createAPIEndpoint, ENDPOINTS } from '../../api';

export default function PatientRegister() {
  const navigate = useNavigate()
  const {setContext} = useStateContext();
  // Get objects from pre-register
  const user = useLocation().state.user;
  const patient = useLocation().state.patient;


  const list = patientRegLists()
  const customizedField = patient.isMinor ?patientGuardianReg :patientMaritualReg
  let temp = []
  let tempObj = {}
  if(patient.isMinor) tempObj.GuardianId = ''
  else tempObj.MaritalStatus = ''

  list.map( l => 
    {l.value.map(obj => {
      obj.map(ele => temp.push(ele.controlId))})
    })
    temp.map(e => tempObj[e] = '')
  
  const getFreshModel = () =>{return tempObj}
  const {
    values,
    errors,
    handleInputChange
  }= useForm(getFreshModel)

  const clickHandler = () =>{
    const {Patient, User, EmergencyContact, Insurance, type} = register(user, patient, values)
    if(!Patient.isMinor){
      createAPIEndpoint(ENDPOINTS.user)
                  .customizePost({User, Patient, EmergencyContact, Insurance, Adult: type}, 'Adult')
                  .then(res => {
                          console.log("success");
                          navigate('/success-register')
                  })
                  .catch(err => {
                      console.log("fail");
                  })
    }
    else{
        createAPIEndpoint(ENDPOINTS.user)
                    .customizePost({User, Patient, EmergencyContact, Insurance, Minor: type}, 'Minor')
                    .then(res => {
                            console.log("successM");
                            navigate('/success-register')
                    })
                    .catch(err => {
                        console.log("fail");
                    })
    }
  }

  return (
    <Container fluid style={{marginBottom: '10%', backgroundColor: 'whitesmoke'}}>
      <Form style={{paddingBottom: '5%', paddingTop: '5%'}}>
        {/* emergency contacts & insurance info */}
        {
          list.map((list,index) =>
            <Forms fields = {list.value} header ={list.header} key ={index} values={values} handler={handleInputChange} errors={errors}/>
        )}

        {/* adult || minor */}
        <div style={{width: "50%"}}>
          <Forms key={"customize"} fields={customizedField.value} header={customizedField.header} values={values} handler={handleInputChange} errors={errors} /> 

        </div>
        
        <Button variant="outline-success" style={{marginLeft: '80%'}} onClick={clickHandler}>Create New Account</Button>
        
      </Form>

    </Container>
  )
}
