import React from 'react';
import {Container, Tab, Row, Col, Nav} from "react-bootstrap";
import Top from "../components/Top/Top";
import Alerts from "../components/Alerts/Alerts";

const Dashboard = () => {
  return(
    <Container className='px-0 dashboard' fluid>
      <Top />
      <Container className='px-5 py-5' fluid>
        <Tab.Container defaultActiveKey="Alerts">
          <Row className='mx-0'>
            <Col className='px-0' xxl={1} lg={2} sm={12}>
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
                  <Nav.Link eventKey="Register">Register</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col className="px-md-2 pt-lg-0 pt-sm-4 px-sm-0" xxl={11} lg={10} sm={12}>
              <Tab.Content>
                <Tab.Pane className='tab p-3' eventKey="Alerts">
                  <Alerts />
                </Tab.Pane>
                <Tab.Pane className='tab p-3' eventKey="Patients">
                  Patients
                </Tab.Pane>
                <Tab.Pane className='tab p-3' eventKey="Ambulances">
                  Ambulances
                </Tab.Pane>
                <Tab.Pane className='tab p-3' eventKey="History">
                  History
                </Tab.Pane>
                <Tab.Pane className='tab p-3' eventKey="Register">
                  Register
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
