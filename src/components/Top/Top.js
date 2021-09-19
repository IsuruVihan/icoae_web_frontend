import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <Container className='top p-0' fluid>
      <Row className='mx-0 px-5 align-items-center row'>
        <Col className='px-0 text-center' xs={{span: 4, offset: 4}}>
          <label className='title'>Admin Dashboard</label>
        </Col>
        <Col className='px-0 text-end' xs={4}>
          <Button className='logout-btn' variant='outline-danger' size='sm'>
            <Link className='logout-link' to='/login'>Logout</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Top;
