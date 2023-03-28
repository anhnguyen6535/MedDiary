import React, { useState } from 'react'
import { Col, InputGroup, Button, Row, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const sortType = (ele) => {
    if(ele.sort == 'control'){
        return <Form.Control type={ele.type} placeholder={ele.placeholder}/>
    }
    else if(ele.sort == 'select'){
        return(
            <Form.Select>
                {ele.options.map((op, index) =>
                    <option key={index}>{op}</option>
                )}
            </Form.Select>
        )
    }else{
        return <Form.Check size="xx-large" type="checkbox" label={ele.placeholder} />
    }
}

export default function Forms(prop) {

  return (
    <Container>
        <div>
            <h4>{prop.header}</h4>
        </div>
        <Form.Group>
            {prop.fields.map((field, index) => 
                <Row key={index}>
                    {field.map((ele) =>
                        <Form.Group as={Col} className="mb-3" controlId={ele.controlId} key={ele.controlId}>
                            {/* {ele.label != '' ? <Form.Label>{ele.label}</Form.Label> : ''} */}
                            {sortType(ele)}
                        </Form.Group>
                    )}
                </Row>
            )}
        </Form.Group>
    </Container>
   )
}
