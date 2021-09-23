import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Container} from "react-bootstrap";

// Dummy data
const alertList = [{
  id: 1,
  picSrc: '',
  name: 'Isuru Harischandra',
  age: 22,
  gender: 'Male',
  city: 'Athurugiriya',
  sensorData: {
    temp: 33.45,
    pulse: 123.23,
    fall: 1
  },
  description: 'Low pressure',
  patientTelNo: '0768036130',
  guardianTelNo: '0714878261',
  status: 'Unassigned'
}, {
  id: 2,
  picSrc: '',
  name: 'Sayuru Harischandra',
  age: 17,
  gender: 'Male',
  city: 'Athurugiriya',
  sensorData: {
    temp: 32.67,
    pulse: 117.35,
    fall: 0
  },
  description: 'High pressure',
  patientTelNo: '0777770627',
  guardianTelNo: '0714878261',
  status: 'Unassigned'
}];

// Table columns
const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true
}, {
  dataField: 'sensorData.temp',
  text: 'Temp'
}, {
  dataField: 'sensorData.pulse',
  text: 'Pulse'
}, {
  dataField: 'sensorData.fall',
  text: 'Fall'
}];

// Table row select
const selectRow = {
  mode: 'radio'
};

const AlertsTable = () => {
  return (
    <Container className='px-0 alerts-table' fluid>
      <BootstrapTable keyField='id' data={ alertList } columns={ columns } selectRow={selectRow} />
    </Container>
  );
}

export default AlertsTable;
