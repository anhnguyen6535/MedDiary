import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GeneralRow, MedicationRow, TodoRow } from './FormRow';
import DateComponent from './helperModules/DateComponent';

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
        console.log(medications);
        console.log(todos);
    }

    return (
        <Container fluid>
            <Form style={{ paddingBottom: '5%', paddingTop: '5%' }} onSubmit={handleSubmit}>

                <DateComponent/>

                {/* get clininc name and display it  */}
                {/* get physician name and display it */}


                <Form.Group className="mb-3">
                    <Form.Label>Daiagnosis/Note:</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder = "Diagnosis/Notes"
                    />
                </Form.Group> 
                
                <GeneralRow header='Medications:' lists={medications} type='med' handleChange={handleMedicationChange} handleRemove={handleRemoveMedication} />
                <GeneralRow header='Todo:' lists={todos} type='todo' handleChange={handleTodoChange} handleRemove={handleRemoveTodo} />           

                <Button variant="success" className="ms-2" onClick={handleAddTodo}>
                    Add Todo
                </Button>
                <Button variant="success" className="ms-2" onClick={handleAddMedication}>
                    Add Medication
                </Button>
                <Button type="submit" className="ms-2">
                    Submit
                </Button>
                <Button className="ms-2" onClick={() => navigate("/clinic-log")} >
                    Cancel
                </Button>
            </Form>

        </Container>

    );
}
