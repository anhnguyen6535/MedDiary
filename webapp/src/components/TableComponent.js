import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'

export default function TableComponent({val, header}) {
  return (
    <Container className='d-flex justify-content-md-center' >

            <Table bordered size="sm" style={{marginTop: "10%", width:"60%", border: "2px solid #36424A"}}>
                <tbody >
                    {header.map((hd, index) => 
                        <tr key={index}>
                            <th>{hd}</th>
                            <td>{val[index]}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
    </Container>
  )
}
