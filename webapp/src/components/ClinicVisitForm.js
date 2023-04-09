import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MedicationRow({ medication, onChange, onRemove }) {
    return (
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

function TodoRow({todo, onChange, onRemove }) {
    return (
        <div className="d-flex mb-2">
            <Form.Control
                type="text"
                value={todo.title}
                onChange= {(e) => onChange({...todo, title: e.target.value})}
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

export default function AppointmentForm() {
    const [medications, setMedications] = useState([{ name: '', duration: '', dosage: '' }]);
    const [todos, setTodos] = useState([{title:'', description: ''}]);

    const navigate = useNavigate();

    function handleAddMedication() {
        setMedications([...medications, { name: '', duration: '', dosage: '' }]);
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
        setTodos([...todos, { title: '', description:'' }]);
    }

    function handleRemoveTodo(index) {
        setTodos(todos.filter((_, i) => i !== 1));
    }

    function handleTodoChange(index, todo) {
        const newTodos = [...todos];
        newTodos[index] = todo;
        setTodos(newTodos);
    }


    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission here
    }

    //for date 
    const currentDate = new Date();
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);


    return (
        <Container fluid style={{ marginBottom: '10%', backgroundColor: 'whitesmoke' }}>
            <Form style={{ paddingBottom: '5%', paddingTop: '5%' }}>

                <Form.Label className="d-flex mb-2">
                    Date: {formattedDate}
                </Form.Label>

                {/* get clininc name and display it  */}


                {/* get physician name and display it */}


                <Form.Group className="mb-3">
                    <Form.Label>Daiagnosis/Note:</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder = "Diagnosis/Notes"
                    />

                </Form.Group> 


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

                <Form.Group className='mb-3'>
                    <Form.Label>Todo:</Form.Label>
                    {todos.map((todo, index) => (
                        <Form.Group key={index} controlId={`formTodo${index}`}>
                        <TodoRow
                            todo = {todo}
                            onChange = {(updatedTodo) => handleTodoChange(index, updatedTodo)}
                            onRemove = {() => handleRemoveTodo(index)}
                        />
                        </Form.Group>
                    ))}
                </Form.Group>            

                <Button variant="success" className="ms-2" onClick={handleAddTodo}>
                    Add Todo
                </Button>
                <Button variant="success" className="ms-2" onClick={handleAddMedication}>
                    Add Medication
                </Button>
                <Button type="submit" className="ms-2">
                    Submit
                </Button>
                <Button type="submit" className="ms-2" onClick={() => navigate("/clinic-log")} >
                    Cancel
                </Button>
            </Form>

        </Container>

    );
}
