import React from 'react';
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import DummyUser from '../../../assets/images/user-regular.svg';
import Map from "./Map";


const DetailsPanel = ({ selectedAmbulance }) => {
  return (
    <Container className='details-panel p-2' fluid>
      <Row className='mx-0'>
        <Col className='px-0 user-pic-container' xxl={4} xl={5} lg={12} sm={6} xs={12}>
          <Image src={DummyUser} className='user-pic' width='60%' alt='dummy-user' />
        </Col>
        <Col className='px-0 ps-xl-2 pt-xl-0 pt-lg-2 ps-lg-0 ps-sm-2' xxl={8} xl={7} lg={12} sm={6} xs={12}>
          <Form className="patient-details-form p-2">
            <Form.Group as={Row}>
              <Form.Label column xxl={2} xl={3}>
                Name
              </Form.Label>
              <Col xxl={10} xl={9}>
                <Form.Control value={selectedAmbulance.name} type="text" size="sm" placeholder="Driver name" disabled />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column xxl={2} xl={3}>
                Age
              </Form.Label>
              <Col xxl={10} xl={9}>
                <Form.Control value={selectedAmbulance.age} type="text" size="sm" placeholder="Driver age" disabled />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column xxl={2} xl={3}>
                Gender
              </Form.Label>
              <Col xxl={10} xl={9}>
                <Form.Control value={selectedAmbulance.gender} type="text" size="sm" placeholder="Driver gender" disabled />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column xxl={2} xl={3}>
                City
              </Form.Label>
              <Col xxl={10} xl={9}>
                <Form.Control value={selectedAmbulance.city} type="text" size="sm" placeholder="Driver city" disabled />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="description-row mx-0 mt-2 p-2">
        <Col className="tel-col ps-xl-1 ps-lg-0 ps-sm-1 pe-0" xl={4} lg={12} xs={12}>
          <Row className="tel-row flex-column justify-content-between mx-0">
            <Col className="tel-person align-center p-1" xs={12}>
              <Row className="name-number mx-0">
                <Col className="name text-center px-0" xs={12}>
                  Ambulance No
                </Col>
                <Col className="number text-center px-0" xs={12}>
                  {selectedAmbulance.ambulanceNo}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="tel-col ps-xl-1 ps-lg-0 ps-sm-1 pe-0" xl={4} lg={12} xs={12}>
          <Row className="tel-row flex-column justify-content-between mx-0">
            <Col className="tel-person align-center p-1" xs={12}>
              <Row className="name-number mx-0">
                <Col className="name text-center px-0" xs={12}>
                  Driver
                </Col>
                <Col className="number text-center px-0" xs={12}>
                  {selectedAmbulance.telNo}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="tel-col ps-xl-1 ps-lg-0 ps-sm-1 pe-0" xl={4} lg={12} xs={12}>
          <Row className="tel-row flex-column justify-content-between mx-0">
            <Col className="tel-person align-center p-1" xs={12}>
              <Row className="name-number mx-0">
                <Col className="name text-center px-0" xs={12}>
                  Status
                </Col>
                <Col className="number text-center px-0" xs={12}>
                  {selectedAmbulance.status}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="map-row mx-0 mt-2 p-2">
        <Map ambulanceLoc={selectedAmbulance.location} />
      </Row>
    </Container>
  );
}

export default DetailsPanel;
