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
        <div className="d-flex">
            <Form.Control
                as="textarea"
                rows={3}
                value={value}
                onChange={onChange}
                placeholder="Diagnosis"
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

    function handleAddMedication() {
        setMedications([...medications, { name: '', datePrescribed: '', duration: '', dosage: '' }]);
    }

    function handleRemoveMedication(index) {
        setMedications(medications.filter((_, i) => i !== index));
    }

    function handleMedicationChange(index, medication) {
        const newMedications = [...medications];
        newMedications[index] = medication;
        setMedications(newMedications);
    }

    function handleAddDiagnosis() {
        setDiagnoses([...diagnoses, '']);
    }

    function handleRemoveDiagnosis(index) {
        setDiagnoses(diagnoses.filter((_, i) => i !== index));
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

                <Button variant="primary" className="ms-2" onClick={handleAddDiagnosis}>
                    Add Diagnosis
                </Button>
                <Button variant="primary" className="ms-2" onClick={handleAddMedication}>
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
