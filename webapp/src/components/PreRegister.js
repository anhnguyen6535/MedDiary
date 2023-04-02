import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm'
import useStateContext from '../hooks/useStateContext';
import { createObjFromList } from './data/ListFilter';
import { userRegList } from './data/RegisterLists';
import { validatePw } from './data/validation';
import { register } from './doctors/doctorAPI';
import Forms from './Forms';

export default function PreRegister() {
    const { context} = useStateContext();
    const navigate = useNavigate();
    const [pwdCheck, setPwCheck] = useState('')
    const [checkUpdate, setUpdate] = useState(false)
    const [isMinor, setIsMinor] = useState(false)
    const [pracId, setPracId] = useState("")

    const userObj = createObjFromList(userRegList, {}, context.isDoctor) 

    const getFreshModel = () =>{return userObj}
    const {
      values,
      errors,
      setErrors,
      handleInputChange
    }= useForm(getFreshModel)

    useEffect(() =>{
        if(pwdCheck != '' && pwdCheck == values.password){
            setUpdate(<p style={{color: "green"}}>Correct</p>)
        }else setUpdate(<p style={{color: "red"}}>Do not match</p>)
    },[pwdCheck])

    const next = e => {
        e.preventDefault();
        if (validate()){
          console.log(values)
            if(context.isDoctor){ 
              register(values, {sin: values.sin, pracId})
            }else{
              values.isMinor = isMinor
              navigate('/register',{state: {
                user: values,
                isMinor
              }})
            } 
        }
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.password = validatePw(values.password)
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
      }
            
  return (
    <>
      <Form onSubmit={next} style={{width: "50%"}} className="mx-auto">
        <Forms fields={userRegList.value} header={userRegList.header} values={values} handler={handleInputChange} errors={errors}/>

        <Container>
          {context.isDoctor ?
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>PracId</Form.Label>
              <Form.Control type="text" value={pracId} onChange={e => setPracId(e.currentTarget.value)}/>
            </Form.Group> 
            :""
          }

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={pwdCheck} onChange={e => setPwCheck(e.currentTarget.value)}/>
            {checkUpdate}
          </Form.Group>

          {context.isDoctor ?"" :
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I am a minor" value={isMinor} name='isMinor' onChange={() => setIsMinor(true)}/>
              </Form.Group>
          }
        </Container>
        
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
