import React from 'react';
import {Container, Tab, Row, Col, Nav} from "react-bootstrap";
import Top from "../components/Top/Top";

const Dashboard = () => {
  return(
    <Container className='px-0 dashboard' fluid>
      <Top />
      <Container className='px-0 py-5'>
        <Tab.Container defaultActiveKey="Alerts">
          <Row className='mx-0'>
            <Col className='px-0' sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className='nav-btn'>
                  <Nav.Link eventKey="Alerts">Alerts</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-btn'>
                  <Nav.Link eventKey="Patients">Patients</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-btn'>
                  <Nav.Link eventKey="Ambulances">Ambulances</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-btn'>
                  <Nav.Link eventKey="History">History</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-btn'>
                  <Nav.Link eventKey="RegisterDriver">Register Driver</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane className='tab' eventKey="Alerts">
                  Alerts
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
}

export default Dashboard;
