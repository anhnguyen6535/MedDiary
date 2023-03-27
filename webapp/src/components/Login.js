import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Logo from './Logo'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'

export default function Login() {
  // const { context, setContext, resetContext } = useStateContext();
  const navigate = useNavigate();

  const state = {
    email: '',
    password:''
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  
  const login = e => {
    e.preventDefault();
    // console.log(email, password);
    // if (validate())
    //     createAPIEndpoint(ENDPOINTS.participant)
    //         .post(values)
    //         .then(res => {
    //             setContext({ userId: res.data.userId })
    //             navigate('/profile')
    //         })
    //         .catch(err => console.log(err))
  }

  // const validate = () => {
  //     let temp = {}
  //     temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
  //     temp.password = values.password != "" ? "" : "This field is required."
  //     setErrors(temp)
  //     return Object.values(temp).every(x => x == "")
  // }
  

  return (
    <>
      <Logo/>
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        
        <div>
          <Button variant="primary" type="submit">
            Log in as Doctor
          </Button>
          <Button variant="primary" type="submit">
            Log in as Patient
          </Button>
        </div>
        <div>
          <Button>
            Don't have an account? Create a new account.
          </Button>
        </div>
      </Form>
    </>

  )
}
