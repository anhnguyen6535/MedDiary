import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { doctorInfoReg } from '../data/RegisterLists';
import Forms from '../Forms';

export default function DoctorRegister() {
  const preValue = useLocation().state.value;
  const list = doctorInfoReg

  let temp = []
  let tempObj = {...preValue}
  tempObj.isDoctor = true

  // Add all values into a list and use map to create tempObj
  list.value.map(obj => {
    obj.map(ele => temp.push(ele.controlId))})
  temp.map(e => tempObj[e] = '')
  
  // Create useForm
  const getFreshModel = () =>{return tempObj}
  const {
    values,
    handleInputChange
  }= useForm(getFreshModel)

  // Register clicked 
  const clickHandler = () =>{
    console.log(values)
  }

  return (
    <Container fluid style={{marginBottom: '10%', backgroundColor: 'whitesmoke'}}>
      <Form style={{paddingBottom: '5%', paddingTop: '5%'}}>
        <Forms fields={list.value} header={list.header} values={values} handler={handleInputChange}/> 

        <Container>
          <Form.Group className="mb-3" controlId="pracId" style={{width: "50%", paddingRight: "1%"}}>
            <Form.Label>PracId</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Container>

        <Button variant="outline-success" style={{marginLeft: '80%'}} onClick={clickHandler}>Create New Account</Button>
      </Form>

    </Container>
  )
}
