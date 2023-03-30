import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'

// The header is the first column
export function HorizontalTable({val, header}) {
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

// The header is the first row
export function VerticalTable({val, header}) {
  return (
    <Container className='d-flex justify-content-md-center' >

            <Table bordered size="sm" style={{marginTop: "10%", width:"60%", border: "2px solid #36424A"}}>
              <thead>
                <tr>
                  {header.map((hd, index) => (
                    <th key={index}>{hd}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                  {val.map((v, index) => (
                    <tr key={index}>
                      {v.map((ele, index) => (
                        <td key={index}>{ele}</td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </Table>
    </Container>
  )
}
