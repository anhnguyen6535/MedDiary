import React from 'react'
import { Container, Table } from 'react-bootstrap'


// The header is the first column
export function HorizontalTable({val, header, title}) {
  return (
    <Container className='d-flex justify-content-md-center' style={{marginTop: "10%"}}>
      <Container>
        {title != null ?<h4 style={{fontSize: '20px', fontWeight: "bold"}}>{title}</h4> :''}   
        <Table size="lg">
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
    </Container>
  )
}

// The header is the first row
export function VerticalTable({val, header, title}) {
  return (
    <Container className='d-flex justify-content-md-center' style={{marginTop: "10%"}}>
          <Container>
            {title != null ?<h4 style={{fontSize: '20px', fontWeight: "bold"}}>{title}</h4> :''}    
            <Table size="lg" >
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
    </Container>
  )
}

export function VerticalTableLink({val, header, handler}) {

  return (
    <Container className='d-flex justify-content-md-center' >
      <Table size="sm" style={{marginTop: "10%", width:"60%"}}>
        <thead>
          <tr>
            {header.map((hd, index) => (
              <th key={index}>{hd}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {val.map((v, index) => (
            <tr key={index} onClick={() => handler(v[1], v[0])}>
              {v.map((ele, index) => (
                <td key={index}>{ele}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
