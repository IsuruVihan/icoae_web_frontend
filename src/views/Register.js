import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Register = () => {
    return (
        <Container className='register'>
            <h4 className="">Register Driver</h4>
            <Form>
                <Row className="">
                    <Col lg={6} md={6} sm={12} className="p-3 m-auto ">

                        <Form.Group controlId="formBasicNIC" className="mb-3">
                            <Form.Label>NIC</Form.Label>
                            <Form.Control type="text" placeholder="Enter NIC" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" required />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} md="6" controlId="formBasicDOB" className="mb-3">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Enter DOB" required />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="formBasicGender" className="mb-3">
                                <Form.Label
                                    className="me-sm-2"
                                    htmlFor="inlineFormGender"
                                >
                                    Gender
                                </Form.Label>
                                <Form.Select className="me-sm-2" id="inlineFormGender" required >
                                    <option value="0">Choose...</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group controlId="formBasicTelNo" className="mb-3">
                            <Form.Label>Telephone Number </Form.Label>
                            <Form.Control type="number" placeholder="Enter telephone number" onWheel={(e) => e.target.blur()} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress" className="mb-3">
                            <Form.Label>Home Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicProfile" className="mb-3">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="p-5 rounded-lg ">
                        <h5 className="p-3 text-center">Licence Information</h5>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Licence Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formLicenseNumber" className="mb-3">
                            <Form.Label>License Number</Form.Label >
                            <Form.Control type="number" placeholder="Enter license number" onWheel={(e) => e.target.blur()} required />
                        </Form.Group>

                        <Row>
                            <Form.Group as={Col} md="6" controlId="formIsssueDate" className="mb-3">
                                <Form.Label>Issue Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter Issue Date" required />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="formExpDate" className="mb-3">
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter Expiry Date" required />
                            </Form.Group>
                        </Row>

                        <Button variant="primary btn-block float-right" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Register;