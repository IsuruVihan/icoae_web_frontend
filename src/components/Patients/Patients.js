import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PatientsTable from "./PatientsTable";
import DetailsPanel from "./DetailsPanel/DetailsPanel";

const Patients = () => {
  const [selectedPatient, setSelectedPatient] = useState({
    id: '',
    picSrc: '',
    name: '',
    age: '',
    gender: '',
    city: '',
    sensorData: {
      temp: '',
      pulse: '',
      fall: ''
    },
    description: '',
    location: {
      lat: 0,
      long: 0
    },
    telNo: ''
  });

  const onChangeSelectedPatient = (newPatient) => {
    setSelectedPatient(newPatient);
  }

  return (
    <Container className='patients px-0' fluid>
      <Row className='mx-0'>
        <Col className='table-container px-0' xl={6} lg={8} sm={12} xs={12}>
          <PatientsTable onChangeSelectedPatient={onChangeSelectedPatient} />
        </Col>
        <Col className='details-panel-container px-lg-3 px-sm-0' xl={6} lg={4} sm={12} xs={12}>
          <DetailsPanel selectedPatient={selectedPatient}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Patients;
