import React, { useContext, useEffect } from 'react';
import { Container, Button } from "react-bootstrap";
import { filterObjList } from "./helperModules/helper";
import { VerticalTable, VerticalTableLink } from './TableComponent';
import useStateContext from '../hooks/useStateContext';
import { useNavigate } from 'react-router-dom';

export default function ClinicVisit() {
    const {context} = useStateContext()
    const navigate = useNavigate()
    
    // FIXME FAKE DATA 
    // 23/03/2023 is a real date in the db
    const clinicdata = [
        {
            Date: "23/03/2023",
            ClinicName: "asd",
            Pysician: "Dr.bob"
          },
          {
            Date: "23/03/2023",
            ClinicName: "rand clinic",
            Pysician: "Dr.joe"
          },
          {
            Date:"23/03/2023",
            ClinicName: "bob clinic",
            Pysician: "Dr.basdasd"
          },
          {
            Date: "01/30/2020",
            ClinicName: "miltown manor",
            Pysician: "Dr.bsdsd"
          },
          {
            Date: "01/0/2020",
            ClinicName: "cross clinic",
            Pysician: "Dr.xxxxxxx"
          }
    ]

    function handler(date) {
      navigate('/Clinic-Visit-Expanded',{state: {
        sin: context.isDoctor ?context.patientSin :context.sin,
        date
      }})
    }

    const {headers, values} = filterObjList(clinicdata)

    return(
        <Container>
          <VerticalTableLink header={headers} val ={values} handler={handler}></VerticalTableLink>
        </Container>
    )



}