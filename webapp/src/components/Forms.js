import React, { useState } from 'react'
import { Col, InputGroup, Button, Row, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const sortType = (ele,values, handler) => {
    if(ele.sort == 'control'){
        return <Form.Control type={ele.type} placeholder={ele.placeholder} value={values[ele.controlId]} name={ele.controlId} onChange={handler} required={ele.require}/>
    }
    else if(ele.sort == 'select'){
        return(
            <Form.Control required={ele.require} as="select" type="select" value={values[ele.controlId]} name={ele.controlId} onChange={handler}>
                <option value="">Select</option> 
                {ele.options.map((op, index) =>
                    <option key={index} value={op}>{op}</option>
                )}
            </Form.Control>
        )
    }else{
        return <Form.Check size="xx-large" type="checkbox" label={ele.placeholder} required={ele.require}/>
    }
}

export default function Forms({header, fields, values, handler, errors}) {

  return (
    <Container>
        <div>
            <h4>{header}</h4>
        </div>
        <Form.Group>
            {fields.map((field, index) => 
                <Row key={index}>
                    {field.map((ele) =>
                        <Form.Group as={Col} className="mb-3" controlId={ele.controlId} key={ele.controlId} >
                            {ele.label != '' ? <Form.Label>{ele.label}</Form.Label> : ''}
                            {sortType(ele, values, handler)}
                            <p style={{color: "red"}}>{errors[ele.controlId]}</p>
                        </Form.Group>
                    )}
                </Row>
            )}
        </Form.Group>
    </Container>
   )
}
