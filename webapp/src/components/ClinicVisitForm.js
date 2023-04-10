import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import useStateContext from '../hooks/useStateContext';
import { GeneralRow } from './FormRow';
import DateComponent from './helperModules/DateComponent';
import ModalComponent from './ModalComponent';

export default function AppointmentForm() {
    const {context} = useStateContext()
    const [medications, setMedications] = useState([{ name: '', duration: '', dosage: '' }]);
    const [todos, setTodos] = useState([{name:'', description: ''}]);
    const [diagnosis, setDiagnosis] = useState('')
    const [show, setShow] = useState(false)
    const clinicVisit = {
        patientSin: context.patientSin,
        doctorSin: context.sin,
        diagnosis
    }

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
        setTodos([...todos, { name: '', description:'' }]);
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

        const val = {
            clinicVisit,
            medications: medications[0].name == '' ?null :medications,
            todoList: todos[0].name == '' ?null :todos
        }

        // Handle form submission here
        createAPIEndpoint(ENDPOINTS.clinicVisit)
            .customizePost(val, 'Form')
            .then(res =>{
                console.log('success');
                setShow(true)
            })
            .catch(err =>{
                console.log('fail');
            })
    }

    return (
        <Container>
            <ModalComponent show={show}/>
            <Form style={{ paddingBottom: '5%', paddingTop: '5%' }} onSubmit={handleSubmit}>

                <DateComponent/>

                <Form.Group className="mb-3">
                    <Form.Label>Daiagnosis/Note:</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder = "Diagnosis/Notes"
                        value={diagnosis}
                        onChange={e => setDiagnosis(e.currentTarget.value)}
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
