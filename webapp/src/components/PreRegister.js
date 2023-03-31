import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm'
import useStateContext from '../hooks/useStateContext';

export default function PreRegister() {
    const { context} = useStateContext();
    const navigate = useNavigate();
    const [pwdCheck, setPwCheck] = useState('')
    const [checkUpdate, setUpdate] = useState()
    const getFreshModel = () => ({
        email: '',
        password: '',
        isMinor: false
    })
    const {
      values,
      errors,
      setErrors,
      handleInputChange
    }= useForm(getFreshModel)

    useEffect(() =>{
        if(pwdCheck != '' && pwdCheck == values.password){
            setUpdate(<p style={{color: "green"}}>Correct</p>)
        }else setUpdate(<p style={{color: "red"}}>Wrong password</p>)
    },[pwdCheck])

    const next = e => {
        e.preventDefault();
        if (validate()){
            if(context.isDoctor){ 
            navigate('/register',{state: {value: {email: values.email, password: values.password}}})
            }else navigate('/register',{state: {value: values}})
        }
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.password = values.password != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
      }
            
  return (
    <>
      <Form onSubmit={next} style={{width: "50%"}} className="mx-auto">
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

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" value={pwdCheck} onChange={e => setPwCheck(e.currentTarget.value)}/>
          {checkUpdate}
        </Form.Group>

        {context.isDoctor ?'' :
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I am a minor" value={values.isMinor} name='isMinor' onChange={handleInputChange}/>
            </Form.Group>
        }
        
        <div>
          <Button variant="primary" type="submit">
            Next
          </Button>
          <Button variant='link' onClick={() => navigate('/login')} >Login</Button>
        </div>
      </Form>
    </>
  )
}
