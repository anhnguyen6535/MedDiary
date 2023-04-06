import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { createAPIEndpoint, ENDPOINTS } from '../../api'
import useStateContext from '../../hooks/useStateContext'

export default function SearchPatient() {
    const { context, setContext, partiallyResetContext } = useStateContext();
    const [id, SetId] = useState('')
    const [placeholder, SetPlaceholder] = useState('Search Patient Id')
    const navigate = useNavigate()

    useEffect(() => {
        setContext({patientSin: 0})
        console.log(context)
      }, [])

    const searchHandler = () =>{
        createAPIEndpoint(ENDPOINTS.patient)
                .fetchById(id)
                .then(res => {
                    setContext({ patientSin: res.data.sin})
                    navigate('/clinic-log')
                })
                .catch(err => {
                    SetId('')
                    SetPlaceholder('Patient Not Found')
                })
        console.log(id)
    }

  return (
    <Container className='container d-flex justify-content-center text-center' style={{width:'60%', height: '600px'}}>
        <div className='search' >
            <input className='inputS' type="text" placeholder={placeholder} value={id} onChange={(e) => SetId(e.currentTarget.value)}/>
            <button className='buttonS' type="submit" onClick={searchHandler}>
                <img className='imageS' src='add48.png' alt="buttonpng" border="0" />
            </button>
        </div>
    </Container>
  )
}
