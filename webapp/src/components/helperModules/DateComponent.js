import React from 'react'
import { Form } from 'react-bootstrap';

export default function DateComponent() {
    const currentDate = new Date();
    const options = {day: '2-digit',  month: '2-digit', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <Form.Label className="d-flex mb-2">
        Date: {formattedDate}
    </Form.Label>
  )
}
