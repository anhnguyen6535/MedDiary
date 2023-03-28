import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Logo from './Logo'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'

export default function Login() {
  const { context, setContext, resetContext, partiallyResetContext } = useStateContext();
  const navigate = useNavigate();

  const state = {
    email: '',
    password:'',
    isDoctor: context.isDoctor
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorE, setErrorE] = useState('');
  const [errorP, setErrorP] = useState('');

  useEffect(() => {
    partiallyResetContext()
  }, [])
  
  const login = e => {
    e.preventDefault();
    // console.log(email, password);
    if (validate()){
      state.email = email
      state.password = password

      // FIXME: FAKE LOGIN
      setContext({ userId: 1})
      state.isDoctor ?navigate('/doctor-profile') :navigate('/patient-profile')
      console.log(state);

      // createAPIEndpoint(ENDPOINTS.participant)
      //       .log(state)
      //       .then(res => {
      //           // setContext({ userId: res.data.userId })
      //           navigate('/profile')
      //       })
      //       .catch(err => console.log(err))
    }
        
  }

  const validate = () => {
      let temp = {}
      temp.email = (/\S+@\S+\.\S+/).test(email) ? "" : "Email is not valid."
      temp.password = password != "" ? "" : "This field is required."
      setErrorE(temp.email)
      setErrorP(temp.password)
      return Object.values(temp).every(x => x == "")
  }


  return (
    <>
      <Form onSubmit={login} style={{width: "50%"}} className="mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <p style={{color: "red"}}>{errorE}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <p style={{color: "red"}}>{errorP}</p>
        </Form.Group>
        
        <div>
          <Button variant="primary" type="submit">
            Log in
          </Button>
          <Button variant='link'>Register</Button>
        </div>
      </Form>
    </>

  )
}
