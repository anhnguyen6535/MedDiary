import React, { useContext } from 'react';
import { Container, Button } from "react-bootstrap";
import { filterObjList } from "./helperModules/helper";
import { VerticalTable, VerticalTableLink } from './TableComponent';
import useStateContext from '../hooks/useStateContext';
import { useLocation, useNavigate } from 'react-router-dom';




export default function ClinicVisit() {
    const sin = useLocation().state.sin
    // FIXME FAKE DATA 

    const naviagte = useNavigate()
    const clinicdata = [
        {
            Date: "01/30/2023",
            ClinicName: "asd",
            Pysician: "Dr.bob"
          },
          {
            Date: "04/26/2022",
            ClinicName: "rand clinic",
            Pysician: "Dr.joe"
          },
          {
            Date:"12/6/2021",
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
    console.log(sin);
    const {context} = useStateContext()

    const {headers, values} = filterObjList(clinicdata)

    function handler() {
      naviagte('/Clinic-Visit-Expanded', {state: {
        User: 2, 
        Date: "01/30/2023"
        
      }})

    }

    return(
        <Container>
          <VerticalTableLink header={headers} val ={values}  ></VerticalTableLink>

          {context.isDoctor ? 
         ''
          :
          <Button variant="primary" className="ms-2" >
          Add Visit
       </Button>    }
        </Container>
    )



}