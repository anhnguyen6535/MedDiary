import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import useForm from '../hooks/useForm'
import useStateContext from '../hooks/useStateContext';
import { createObjFromList } from './helperModules/helper';
import { userRegList } from './data/RegisterLists';
import { validatePw } from './helperModules/validation';
import { register } from './doctors/doctorAPI';
import Forms from './Forms';

export default function PreRegister() {
    const { context} = useStateContext();
    const navigate = useNavigate();
    const [pwdCheck, setPwCheck] = useState('')
    const [checkUpdate, setUpdate] = useState(false)
    const [isMinor, setIsMinor] = useState(false)
    const [id, setId] = useState("")

    const userObj = createObjFromList(userRegList.value, {}, context.isDoctor, "controlId") 
    
    const getFreshModel = () =>{return userObj}
    const {
      values,
      errors,
      setErrors,
      handleInputChange
    }= useForm(getFreshModel)
    
    // errors = createObjFromList(userRegList, {}, null) 

    useEffect(() =>{
        if(values.password != "")
          errors.password = validatePw(values.password)
        if(pwdCheck != '' && pwdCheck == values.password){
            setUpdate(<p style={{color: "green"}}>Correct</p>)
            errors.confirmPassword = true
        }else{
          setUpdate(<p style={{color: "red"}}>Do not match</p>)
          errors.confirmPassword = false
        } 
    },[pwdCheck,values.password])

    const next = e => {
        e.preventDefault();
        if (validate()){
            if(context.isDoctor){ 
              createAPIEndpoint(ENDPOINTS.user)
                .customizePost({User: values, Doctor: {sin: values.sin, pracId: id}},'Doctor')
                .then(res => {
                    console.log("success");
                    // setContext({ userId: res.data.participantId })
                    navigate('/success-register')
                })
                .catch(err => {
                    console.log("fail");
                })
            }else{
              console.log(values);
              navigate('/register',{state: {
                user: values,
                patient: {sin: values.sin, healthId: id, isMinor}
              }})
            } 
        }else{
          console.log(errors);
        } 
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.password = validatePw(values.password)
        setErrors({confirmPassword: errors.confirmPassword, email: temp.email, password: temp.password})
        return Object.values(temp).every(x => x == "") && errors.confirmPassword
      }
            
  return (
    <>
      <Form onSubmit={next} style={{width: "50%"}} className="mx-auto">
        <Forms fields={userRegList.value} header={userRegList.header} values={values} handler={handleInputChange} errors={errors}/>

        <Container>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={pwdCheck} onChange={e => setPwCheck(e.currentTarget.value)} required/>
            {checkUpdate}
          </Form.Group>

          {context.isDoctor ?
              <Form.Group className="mb-3" controlId="pracId" >
                <Form.Label>PracId</Form.Label>
                <Form.Control type="text" value={id} onChange={e => setId(e.currentTarget.value)} required/>
              </Form.Group>
          :
              <>
                  <Form.Group className="mb-3" controlId="healthId" >
                    <Form.Label>Health Number</Form.Label>
                    <Form.Control type="text" value={id} onChange={e => setId(e.currentTarget.value)} required/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="minor">
                      <Form.Check type="checkbox" label="I am a minor" value={isMinor} name='isMinor' onChange={() => setIsMinor(true)}/>
                  </Form.Group>
              </>
          }
        </Container>
        
        <div>
          <Button variant="primary" type="submit">
            {context.isDoctor ?"Create new account" :"Next"}
          </Button>
          <Button variant='link' onClick={() => navigate('/login')} >Login</Button>
        </div>
      </Form>
    </>
  )
}
