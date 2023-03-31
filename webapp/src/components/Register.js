import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import Center from './Center';
import { RegisterPatientlist, patientRegLists } from './data/RegisterLists';
import Forms from './Forms';

export default function Register() {

  // useEffect(() => {
  //   // change background color with a random color
  //   document.body.style.background = '#36424A';
  // });
  const list = patientRegLists()
  let temp = []
  let tempObj = {}
  const getFreshModel = () =>{return tempObj}

  list.map( l => 
    {l.value.map(obj => {
      obj.map(ele => temp.push(ele.controlId))})
  })
  temp.map(e => tempObj[e] = '')

  const {
    values,
    setValues,
    errors,
    setErrors,
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
        
        <Button variant="outline-success" style={{marginLeft: '80%'}} onClick={clickHandler}>Create New Account</Button>
        
      </Form>

    </Container>
  )
}
