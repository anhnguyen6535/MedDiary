import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { createAPIEndpoint, ENDPOINTS } from '../../api';
import useForm from '../../hooks/useForm';
import { doctorInfoReg } from '../helperModules/RegisterList';
import Forms from '../Forms';


export default function DoctorRegister() {
  const user = useLocation().state.user;
  const navigate = useNavigate()
  const list = doctorInfoReg
  const [err, setErr] = useState('')
  
  // Create useForm
  let temp = []
  let tempObj = {}
  tempObj.sin = user.sin

  list.value.map(obj => {
    obj.map(ele => temp.push(ele.controlId))})
  temp.map(e => tempObj[e] = '')
  
  const getFreshModel = () =>{return tempObj}
  
  const {
    values,
    errors,
    handleInputChange
  }= useForm(getFreshModel)

  // Register clicked 
  const clickHandler = (e) =>{
    e.preventDefault();
    createAPIEndpoint(ENDPOINTS.user)
                .customizePost({User: user, Doctor: values},'Doctor')
                .then(res => {
                    console.log("success");
                    navigate('/success-register')
                })
                .catch(err => {
                    console.log("fail");
                    setErr(err.response.data)
                })
  }

  return (
    <Container fluid style={{marginBottom: '10%', backgroundColor: 'whitesmoke', width:'60%'}}>
      <Form onSubmit={clickHandler} style={{paddingBottom: '5%', paddingTop: '5%'}}>

        <Forms fields = {list.value} header ={list.header} values={values} handler={handleInputChange} errors={errors}/>
        <p style={{color: 'red'}}>{err}</p>
        <Button variant="primary" type="submit">Create new account</Button>

      </Form>
    </Container>
  )
}
