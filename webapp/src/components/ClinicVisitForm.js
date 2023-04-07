import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function MedicationRow({ medication, onChange, onRemove }) {
    return (
        <div className="d-flex mb-2" >
            <Form.Control
                type="date"
                value={medication.datePrescribed}
                onChange={(e) => onChange({ ...medication, datePrescribed: e.target.value })}
                placeholder="Date Prescribed"
                className="ms-1"

            />

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

function DiagnosisRow({ value, onChange, onRemove }) {
    return (
        <div className="d-flex mb-2">
            <Form.Control
                as="textarea"
                rows={3}
                value={value}
                onChange={onChange}
                placeholder="Diagnosis"
                className='ms-1'
            />
            <Button variant="danger" className="ms-2" onClick={onRemove}>
                Remove
            </Button>
        </div>
    );
}

function TodoRow({ todo, onChange, onRemove }) {
    return (
        <div className="d-flex mb-2">
            <Form.Control
                type="text"
             
                value={todo}
                onChange={onChange}
                placeholder="Todo"
                className="ms-1"
            />
            <Button variant="danger" className="ms-2" onClick={onRemove}>
                Remove
            </Button>
        </div>
    );
}

export default function AppointmentForm() {
    const [medications, setMedications] = useState([{ name: '', datePrescribed: '', duration: '', dosage: '' }]);
    const [diagnoses, setDiagnoses] = useState(['']);
    const [todos, setTodos] = useState(['']);


    function handleAddMedication() {
        setMedications([...medications, { name: '', datePrescribed: '', duration: '', dosage: '' }]);
    }

    function handleRemoveMedication(index) {
        setMedications(medications.filter((_, i) => i !== 1));
    }

    function handleMedicationChange(index, medication) {
        const newMedications = [...medications];
        newMedications[index] = medication;
        setMedications(newMedications);
    }

    function handleAddTodo() {
        setTodos([...todos, { todo: '' }]);
    }

    function handleRemoveTodo(index) {
        setTodos(todos.filter((_, i) => i !== 1));
    }



    function handleAddDiagnosis() {
        setDiagnoses([...diagnoses, '']);
    }

    function handleRemoveDiagnosis(index) {
        setDiagnoses(diagnoses.filter((_, i) => i !== 1));
    }

    function handleDiagnosisChange(index, value) {
        const newDiagnoses = [...diagnoses];
        newDiagnoses[index] = value;
        setDiagnoses(newDiagnoses);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission here
    }

    function handleCancel(event) {
        event.preventDefault();
        // Handle form submission here
    }

    return (
        <Container fluid style={{ marginBottom: '10%', backgroundColor: 'whitesmoke' }}>
            <Form style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formClinic">
                    <Form.Label>Clinic:</Form.Label>
                    <Form.Control as="select">
                        <option>Select a clinic</option>
                        <option>Clinic 1</option>
                        <option>Clinic 2</option>
                        <option>Clinic 3</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhysician">
                    <Form.Label>Physician:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Label>Diagnosis/Notes:</Form.Label>
                {diagnoses.map((diagnosis, index) => (

                    <Form.Group
                        key={index}
                        className="mb-3"
                        controlId={`formDiagnosis${index}`}
                    >
                        <DiagnosisRow
                            value={diagnosis}
                            onChange={(e) => handleDiagnosisChange(index, e.target.value)}
                            onRemove={() => handleRemoveDiagnosis(index)}
                        />
                    </Form.Group>
                ))}




                <Form.Group className="mb-3">
                    <Form.Label>Medications:</Form.Label>
                    {medications.map((medication, index) => (
                        <Form.Group key={index} controlId={`formMedication${index}`}>
                            <MedicationRow
                                medication={medication}
                                onChange={(updatedMedication) => handleMedicationChange(index, updatedMedication)}
                                onRemove={() => handleRemoveMedication(index)}
                            />
                        </Form.Group>
                    ))}
                </Form.Group>

                                <Form.Label >Todo:</Form.Label>
                {todos.map((todo, index) => (
                    <Form.Group className="mb-3" key={index} controlId={`formTodo${index}`}>
                        <TodoRow
                            todo={todo.todo}
                            onChange={(e) => {
                                const newTodos = [...todos];
                                newTodos[index].todo = e.target.value;
                                setTodos(newTodos);
                            }}
                            onRemove={() => handleRemoveTodo(index)}
                        />
                    </Form.Group>
                ))}


                <Button variant="success" className="ms-2" onClick={handleAddTodo}>
                    Add Todo
                </Button>

                <Button variant="success" className="ms-2" onClick={handleAddDiagnosis}>
                    Add Diagnosis
                </Button>
                <Button variant="success" className="ms-2" onClick={handleAddMedication}>
                    Add Medication
                </Button>
                <Button type="submit" className="ms-2">
                    Submit
                </Button>
                <Button type="submit" className="ms-2">
                    Cancel
                </Button>
            </Form>

        </Container>

    );
}
