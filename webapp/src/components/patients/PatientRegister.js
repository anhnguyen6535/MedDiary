import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import useForm from '../../hooks/useForm';
import { patientGuardianReg, patientRegLists } from '../data/RegisterLists';
import Forms from '../Forms';
import { useLocation } from 'react-router-dom'

export default function PatientRegister() {
  const location = useLocation();
  const list = patientRegLists()
  const guardian = patientGuardianReg
  let temp = []
  let tempObj = {...location.state.value}

  list.map( l => 
    {l.value.map(obj => {
      obj.map(ele => temp.push(ele.controlId))})
    })
    temp.map(e => tempObj[e] = '')
  
  const getFreshModel = () =>{return tempObj}
  const {
    values,
    handleInputChange
  }= useForm(getFreshModel)

  const clickHandler = () =>{
    console.log(values)
  }

  return (
    <Container fluid style={{marginBottom: '10%', backgroundColor: 'whitesmoke'}}>
      <Form style={{paddingBottom: '5%', paddingTop: '5%'}}>
        {
          list.map((list,index) =>
            <Forms fields = {list.value} header ={list.header} key ={index} values={values} handler={handleInputChange}/>
        )}

        {values.isMinor ?<Forms fields={guardian.value} header={guardian.header} values={values} handler={handleInputChange}/> :''}
        
        <Button variant="outline-success" style={{marginLeft: '80%'}} onClick={clickHandler}>Create New Account</Button>
        
      </Form>

    </Container>
  )
}
