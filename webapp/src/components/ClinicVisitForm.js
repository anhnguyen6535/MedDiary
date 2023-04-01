import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function MedicationRow({ value, onChange, onRemove }) {
    return (
        <div className="d-flex">
            <Form.Control
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Medication"
            />
            <Button variant="danger" className="ms-2" onClick={onRemove}>
                Remove
            </Button>
        </div>
    );
}

export default function AppointmentForm() {
    const [medications, setMedications] = useState(['']);

    function handleAddMedication() {
        setMedications([...medications, '']);
    }

    function handleRemoveMedication(index) {
        setMedications(medications.filter((_, i) => i !== index));
    }

    function handleMedicationChange(index, value) {
        const newMedications = [...medications];
        newMedications[index] = value;
        setMedications(newMedications);
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
                <Form.Group className="mb-3" controlId="formDiagnosis">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Diagnosis</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </Form.Group>


                {medications.map((medication, index) => (
                    <Form.Group
                        key={index}
                        className="mb-3"
                        controlId={`formMedication${index}`}
                    >
                        <MedicationRow
                            value={medication}
                            onChange={(e) => handleMedicationChange(index, e.target.value)}
                            onRemove={() => handleRemoveMedication(index)}
                        />
                    </Form.Group>
                ))}
                <Button variant="primary" onClick={handleAddMedication}>
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
