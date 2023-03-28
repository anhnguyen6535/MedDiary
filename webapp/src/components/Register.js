import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import Center from './Center';
import { RegisterPatientlist, patientRegLists } from './data/RegisterLists';
import Forms from './Forms';

export default function Register() {

  useEffect(() => {
    // change background color with a random color
    document.body.style.background = '#36424A';
  });

  const list = patientRegLists()

  return (
    <Container fluid style={{marginBottom: '10%', backgroundColor: 'whitesmoke'}}>
      <Form style={{paddingBottom: '5%', paddingTop: '5%'}}>
        {
          list.map((list,index) =>
            <Forms fields = {list.value} header ={list.header} key ={index}/>
        )}
        
        <Button variant="outline-success" style={{marginLeft: '80%'}}>Create New Account</Button>
        
      </Form>

    </Container>
  )
}
