import React, { useEffect, useState } from 'react'
import { Accordion, Form } from 'react-bootstrap'
import { createAPIEndpoint, ENDPOINTS } from '../../api'
import useStateContext from '../../hooks/useStateContext'

export default function Todo() {
    const {context} = useStateContext()
    const [displayTask, setDisplayTask] = useState()
    const [displayComplete, setDisplayComplete] = useState()
    const [list, setList] = useState([])

    // Display list when page first loaded
    useEffect(() =>{
        fetchList()       
    },[])

    // fetch todo lists from db
    const fetchList = () => {
        createAPIEndpoint(ENDPOINTS.todo)
            .fetchById(context.sin)
            .then(res => {
                console.log("fetched");
                setList(res.data)
                filterList(res.data)
            })  
            .catch(err => {
            console.log(err);
        })
    }

    // update todolist in db
    const putList = (task) =>{
        createAPIEndpoint(ENDPOINTS.todo)
            .put(context.sin, task)
            .then(res => {
                fetchList()
            })  
            .catch(err => {
            console.log(err);
        })
    }

    // Filter list into complete and incomplete then display
    const filterList = (todos) =>{
        const temp = todos.filter(x => !x.isComplete)
        const temp2 = todos.filter(x => x.isComplete)

        setDisplayTask(
            temp.map((h,i) => renderAccordion(h,i,false))
        )
        setDisplayComplete(
            temp2.map((h,i) => renderAccordion(h,i,true))
        )
    }

    // Called whenever a task is checked or unchecked
    const clickHandler = (task) =>{
        task.isComplete = !task.isComplete
        putList(task)
    }
    
    // Render tasks based on each list
    const renderAccordion = (task, index, check) => {
        return (
            <Accordion.Item key={index} eventKey={task}>
                <Accordion.Header>
                    <Form.Check size="xx-large" label={task.name} type="checkbox" onClick={e => clickHandler(task)} checked={check} onChange={() => {}}/>
                </Accordion.Header>
                <Accordion.Body>
                    <p>{task.description}</p>
                </Accordion.Body>
            </Accordion.Item>
        );
    };
    
  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tasks</Accordion.Header>
        <Accordion.Body>
            <Accordion>
                {displayTask}
            </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Completed</Accordion.Header>
        <Accordion.Body>
            <Accordion>
                {displayComplete}         
            </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
