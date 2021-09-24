import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AlertsTable from "./AlertsTable";
import DetailsPanel from "../DetailsPanel/DetailsPanel";

const Alerts = () => {
  const [selectedAlert, setSelectedAlert] = useState({
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
    patientTelNo: '',
    guardianTelNo: '',
    status: ''
  });

  const onChangeSelectedAlert = (newAlert) => {
    setSelectedAlert(newAlert);
  }

  return (
    <Container className='alerts px-0' fluid>
      <Row className='mx-0'>
        <Col className='table-container px-0' xl={6} lg={8} sm={12} xs={12}>
          <AlertsTable onChangeSelectedAlert={onChangeSelectedAlert} />
        </Col>
        <Col className='details-panel-container px-lg-3 px-sm-0' xl={6} lg={4} sm={12} xs={12}>
          <DetailsPanel selectedAlert={selectedAlert}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Alerts;
