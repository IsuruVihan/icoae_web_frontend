import React from 'react';
import {Container, Row, Col, Image, Form, Button} from "react-bootstrap";
import DummyUser from '../../assets/images/user-regular.svg';

const DetailsPanel = () => {
  return (
    <Container className='details-panel p-2' fluid>
      <Row className='mx-0'>
        <Col className='px-0 user-pic-container' xxl={4} xl={5} lg={12} sm={6} xs={12}>
          <Image src={DummyUser} className='user-pic' width='60%' alt='dummy-user'/>
        </Col>
        <Col className='px-0 ps-xl-2 pt-xl-0 pt-lg-2 ps-lg-0 ps-sm-2' xxl={8} xl={7} lg={12} sm={6} xs={12}>
          <Form className="patient-details-form p-2">
            <Form.Group as={Row}>
              <Form.Label column xxl={2} xl={3}>
                Name
              </Form.Label>
              <Col xxl={10} xl={9}>
                <Form.Control type="text" size="sm" placeholder="Patient name" disabled/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column xxl={2} xl={3}>
                Age
              </Form.Label>
              <Col xxl={10} xl={9}>
                <Form.Control type="text" size="sm" placeholder="Patient age" disabled/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column xxl={2} xl={3}>
                Gender
              </Form.Label>
              <Col xxl={10} xl={9}>
                <Form.Control type="text" size="sm" placeholder="Patient gender" disabled/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column xxl={2} xl={3}>
                City
              </Form.Label>
              <Col xxl={10} xl={9}>
                <Form.Control type="text" size="sm" placeholder="Patient city" disabled/>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mx-0 mt-2 py-2 sensor-data-row justify-content-center">
        <Col className="sensor-data-set" xs={3}>
          <Row className="mx-0">
            <Col className="sensor-label px-0" xs={12}>
              Temp
            </Col>
            <Col className="sensor-value px-0" xs={12}>
              <Form.Control type="text" size="sm" placeholder="Temp" disabled/>
            </Col>
          </Row>
        </Col>
        <Col className="sensor-data-set" xs={3}>
          <Row className="mx-0">
            <Col className="sensor-label px-0" xs={12}>
              Pulse
            </Col>
            <Col className="sensor-value px-0" xs={12}>
              <Form.Control type="text" size="sm" placeholder="Pulse" disabled/>
            </Col>
          </Row>
        </Col>
        <Col className="sensor-data-set" xs={3}>
          <Row className="mx-0">
            <Col className="sensor-label px-0" xs={12}>
              Fall
            </Col>
            <Col className="sensor-value px-0" xs={12}>
              <Form.Control type="text" size="sm" placeholder="Fall" disabled/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="description-row mx-0 mt-2 p-2">
        <Col className="description-col p-2" xl={8} lg={12} xs={8}>
          Description comes here
        </Col>
        <Col className="tel-col ps-xl-1 ps-lg-0 ps-sm-1 pe-0" xl={4} lg={12} xs={4}>
          <Row className="tel-row flex-column justify-content-between mx-0">
            <Col className="tel-person align-center p-1" xs={12}>
              <Row className="name-number mx-0">
                <Col className="name text-center px-0" xs={12}>
                  Patient
                </Col>
                <Col className="number text-center px-0" xs={12}>
                  768036130
                </Col>
              </Row>
            </Col>
            <Col className="tel-person align-center p-1" xs={12}>
              <Row className="name-number mx-0">
                <Col className="name text-center px-0" xs={12}>
                  Guardian
                </Col>
                <Col className="number text-center px-0" xs={12}>
                  768036130
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailsPanel;
