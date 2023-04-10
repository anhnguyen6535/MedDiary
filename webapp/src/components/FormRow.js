import React from 'react'
import { Button, Form } from 'react-bootstrap';

export function GeneralRow({header,lists,type, handleChange, handleRemove}){
    return(
        <Form.Group className="mb-3">
            <Form.Label>{header}</Form.Label>
            {lists.map((list, index) => (
                <Form.Group key={index} controlId={`formMedication${index}`}>
                    {
                        type == 'med' ?
                            <MedicationRow
                                medication={list}
                                onChange={(updatedMedication) => handleChange(index, updatedMedication)}
                                onRemove={() => handleRemove(index)}
                            />
                        : 
                            <TodoRow
                            todo = {list}
                            onChange = {(updatedTodo) => handleChange(index, updatedTodo)}
                            onRemove = {() => handleRemove(index)}
                            />
                    }
                </Form.Group>
            ))}
        </Form.Group>
    )
}

export function MedicationRow({ medication, onChange, onRemove }) {
    return (
        // <FormRow list={medication} onChange={onChange} onRemove={onRemove}/>
        <div className="d-flex mb-2" >

            <Form.Control
                type="text"
                value={medication.name}
                onChange={(e) => onChange({ ...medication, name: e.target.value })}
                placeholder="Medication Name"
                className="ms-1"

            />

            <Form.Control
                type="text"
                value={medication.duration}
                onChange={(e) => onChange({ ...medication, duration: e.target.value })}
                placeholder="Duration (e.g. 7 days)"
                className="ms-1"

            />
            <Form.Control
                type="text"
                value={medication.dosage}
                onChange={(e) => onChange({ ...medication, dosage: e.target.value })}
                placeholder="Dosage (e.g. 1 tablet)"
                className="ms-1"
            />

            <Button variant="danger" className="ms-2" onClick={onRemove}>
                Remove
            </Button>
        </div>

    );
}

export function TodoRow({todo, onChange, onRemove }) {
    return (
        <div className="d-flex mb-2">
            <Form.Control
                type="text"
                value={todo.name}
                onChange= {(e) => onChange({...todo, name: e.target.value})}
                placeholder="Title"
                className="ms-1"
            />

            <Form.Control
                type="text"
                value={todo.description}
                onChange= {(e) => onChange({...todo, description: e.target.value})}
                placeholder="Description"
                className="ms-1"
            />

            <Button variant="danger" className="ms-2" onClick={onRemove}>
                Remove
            </Button>
        </div>
    );
}

