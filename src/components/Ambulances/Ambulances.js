import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import AmbulancesTable from "./AmbulancesTable";
import DetailsPanel from "./DetailsPanel/DetailsPanel";

const Ambulances = () => {
  const [selectedAmbulance, setSelectedAmbulance] = useState({
    id: '',
    picSrc: '',
    name: '',
    age: '',
    gender: '',
    city: '',
    ambulanceNo: '',
    telNo: '',
    location: {
      lat: 0,
      long: 0
    },
    status: ''
  });

  const onChangeSelectedAmbulance = (newAmbulance) => {
    setSelectedAmbulance(newAmbulance);
  }

  return (
    <Container className='alerts px-0' fluid>
      <Row className='mx-0'>
        <Col className='table-container px-0' xl={6} lg={8} sm={12} xs={12}>
          <AmbulancesTable onChangeSelectedAmbulance={onChangeSelectedAmbulance} />
        </Col>
        <Col className='details-panel-container px-lg-3 px-sm-0' xl={6} lg={4} sm={12} xs={12}>
          <DetailsPanel selectedAmbulance={selectedAmbulance} />
        </Col>
      </Row>
    </Container>
  );
}

export default Ambulances;
