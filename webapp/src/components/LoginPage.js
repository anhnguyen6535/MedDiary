import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'

const getFreshModel = () => ({
    email: '',
    password: ''
})

export default function LoginPage() {
  const { context, setContext, resetContext, partiallyResetContext } = useStateContext();
  const navigate = useNavigate();

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  }= useForm(getFreshModel)

  useEffect(() => {
    partiallyResetContext()
    console.log(context)
  }, [])
  
  const login = e => {
    e.preventDefault();
    if (validate()){
      values.isDoctor = context.isDoctor
      console.log(values);
    }

      // FIXME: FAKE LOGIN
      setContext({ userId: 1})
      values.isDoctor ?navigate('/doctor-profile') :navigate('/patient-profile')

      // createAPIEndpoint(ENDPOINTS.participant)
      //       .log(state)
      //       .then(res => {
      //           // setContext({ userId: res.data.userId })
      //           navigate('/profile')
      //       })
      //       .catch(err => console.log(err))
    }
        
  

  const validate = () => {
    let temp = {}
    temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
    temp.password = values.password != "" ? "" : "This field is required."
    setErrors(temp)
    return Object.values(temp).every(x => x == "")
  }

  const clickRegister = () => {
    navigate('/register')
  }


  return (
    <>
      <Form onSubmit={login} style={{width: "50%"}} className="mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={values.email} name='email' onChange={handleInputChange}/>
          <p style={{color: "red"}}>{errors.email}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={values.password} name='password' onChange={handleInputChange}/>
          <p style={{color: "red"}}>{errors.password}</p>
        </Form.Group>
        
        <div>
          <Button variant="primary" type="submit">
            Log in
          </Button>
          <Button variant='link' onClick={clickRegister}>Register</Button>
        </div>
      </Form>
    </>

  )
}
