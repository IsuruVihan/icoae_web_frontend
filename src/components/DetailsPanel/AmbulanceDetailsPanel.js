import React from 'react';
import {Container, Form, Row, Col, Button} from "react-bootstrap";

const AmbulanceDetailsPanel = ({selectedAmbulance}) => {
  return (
    <Container className="ambulance-details-panel p-2" fluid>
      <Form className="m-0 p-0">
        <Row className="mx-0">
          <Form.Group as={Col} className="">
            <Form.Label>Name</Form.Label>
            <Form.Control value={selectedAmbulance.name} size="sm" type="text" placeholder="Driver Name" disabled/>
          </Form.Group>
          <Form.Group as={Col} className="">
            <Form.Label>Availability</Form.Label>
            <Form.Control value={selectedAmbulance.availability} size="sm" type="text" placeholder="Driver Availability" disabled/>
          </Form.Group>
        </Row>
        <Row className="mx-0">
          <Form.Group as={Col} className="">
            <Form.Label>Distance</Form.Label>
            <Form.Control value={selectedAmbulance.distance} size="sm" type="text" placeholder="Distance to the patient" disabled/>
          </Form.Group>
          <Form.Group as={Col} className="">
            <Form.Label>Tel. No.</Form.Label>
            <Form.Control value={selectedAmbulance.telNo} size="sm" type="text" placeholder="Driver contact" disabled/>
          </Form.Group>
        </Row>
        <Row className="mx-0 mt-2">
          <Col className="px-0 buttons-col" xs={{span: 4, offset: 4}}>
            <Button variant="outline-success" size="sm">Assign</Button>
            <Button variant="outline-danger" size="sm">Cancel</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default AmbulanceDetailsPanel;
