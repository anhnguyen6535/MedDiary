import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import useForm from '../../hooks/useForm';
import { patientGuardianReg, patientMaritualReg, patientRegLists } from '../data/RegisterLists';
import Forms from '../Forms';
import { useLocation } from 'react-router-dom'
import UserRegister from '../UserRegister';
import { register } from './patientAPI';

export default function PatientRegister() {
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
    register(user, patient, values)
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
