import { useState } from "react";
import {Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import {UserDTO} from "../Types/User"

function Login() {
    const navigate = useNavigate()
    const login = (e: React.FormEvent) => {
        e.preventDefault();
        if(validate()){
            createAPIEndpoint(ENDPOINTS.user)
                .post(user)
                .then(res => {
                    navigate('/profile')
                })
                .catch(err => console.log(err))
        }else console.log('validate failed')
    }

    let user : UserDTO ={
        email: "",
        password: "",
        isDoctor: false,
    }
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    
    const validate = () => {
        // if(email !== undefined && password !== undefined){
        //     let test_e = (/\S+@\S+\.\S+/).test(email) ? "" : "Email is not valid."
        //     let test_p = password != "" ? "" : "This field is required."

            user.email = email;
            user.password = password;
            user.isDoctor = checked;

        //     return (test_e && test_p)
        // }
        return true;
    }

    return (  
        <>
            <div className="d-flex justify-content-center align-items-center w-100">
                <Form onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" defaultChecked={checked}
        onChange={() => setChecked(!checked)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Login;