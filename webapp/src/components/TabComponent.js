import React, { useState } from 'react'
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import ClinicVisit from './ClinicVisit';
import LabResults from './LabResults';
import Medication from './Medication';

export default function TabComponent() {

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={2}>
                <Nav variant="tabs" className="flex-column">
                    <Nav.Item >
                        <Nav.Link eventKey="first">Clinic Visit</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Medication</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Lab Results</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <ClinicVisit/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Medication/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <LabResults/>
                    </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>
      </Tab.Container>
    );
}
