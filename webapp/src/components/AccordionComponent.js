import React, { useEffect, useState } from 'react'
import { Accordion, Form } from 'react-bootstrap'
import useForm from '../hooks/useForm'

// FIXME: similar to Todo.js will be deleted if doesnt use
export default function AccordionComponent() {
    const [displayTask, setDisplayTask] = useState()
    const [displayComplete, setDisplayComplete] = useState()
    const todos = [
        {
            name:'Appoinment with Dr.Kim',
            date: '23/04/2023',
            description: 'Hello',
            isComplete: false 
        },
        {
            name:'Blood test',
            date: '',
            description: 'Hello',
            isComplete: false  
        },
        {
            name:'Appoinment with Dr.Hu',
            date: '23/04/2023',
            description: 'Hello',
            isComplete: true  
        }
    ]

    // Handle onChange of each task (doesnt do anything for now)
    const createTracker = (list) => {
        let tempObj = {}
        list.map(ele => tempObj[ele.name] = ele.isComplete)
        return tempObj
    }
    const getFreshModel = () => {createTracker(todos)}
    const {
        values,
        handleInputChange
      }= useForm(getFreshModel)

    // Filter list into complete and incomplete then display
    const filterList = (list) =>{
        const temp = list.filter(x => !x.isComplete)
        const temp2 = list.filter(x => x.isComplete)

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
        filterList(todos)
    }

    // Display list when page first loaded
    useEffect(() =>{
        filterList(todos)
    },[])

    // Render tasks based on each list
    const renderAccordion = (task, index, check) => {
        return (
            <Accordion.Item key={index} eventKey={task}>
                <Accordion.Header>
                    <Form.Check size="xx-large" label={task.name} type="checkbox" onChange={handleInputChange} onClick={e => clickHandler(task)} checked={check}/>
                </Accordion.Header>
                <Accordion.Body>
                    <p>Date: {task.date}</p>
                    <p>Description: {task.description}</p>
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
