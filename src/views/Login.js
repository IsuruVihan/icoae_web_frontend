import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Container className='login '>
      <Row className="mt-5">
        <Col lg={7} md={6} sm={12} className="p-5 m-auto text-center">
          <h1 className="display-1">ICOAE</h1>
          <h1 className="">IN CASE OF AN EMERGENCY</h1>
        </Col>
        <Col lg={5} md={6} sm={12} className="p-5 mt-5 shadow-lg rounded-lg ">
          <h1 className="text-primary p-3 text-center">Admin Login</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary btn-block mt-4 text-center">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <h6 className="mt-5 p-5 text-center ">Copyright © 2021 Code360. All Rights Reserved.</h6>
    </Container>
  );
}

export default Login;
