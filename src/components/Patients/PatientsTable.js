import React, {useEffect, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Container} from "react-bootstrap";

// Dummy data
const patientList = [{
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
  location: {
    lat: 6.93194,
    long: 79.84778
  },
  telNo: '0768036130'
}];

// Table columns
const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'picSrc',
  text: 'picSrc',
  hidden: true
},  {
  dataField: 'name',
  text: 'Name',
  hidden: true
},  {
  dataField: 'age',
  text: 'Age',
  hidden: true
},  {
  dataField: 'gender',
  text: 'Gender',
  hidden: true
},  {
  dataField: 'city',
  text: 'City',
  hidden: true
}, {
  dataField: 'sensorData.temp',
  text: 'Temp'
}, {
  dataField: 'sensorData.pulse',
  text: 'Pulse'
}, {
  dataField: 'sensorData.fall',
  text: 'Fall'
}, {
  dataField: 'description',
  text: 'Description',
  hidden: true
}, {
  dataField: 'location.lat',
  text: 'Latitude',
  hidden: true
}, {
  dataField: 'location.long',
  text: 'Longitude',
  hidden: true
}, {
  dataField: 'telNo',
  text: 'ContactNumber',
  hidden: true
}];

const PatientsTable = ({onChangeSelectedPatient}) => {
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
      lat: '',
      long: ''
    },
    telNo: ''
  });

  useEffect(() => {
    onChangeSelectedPatient(selectedPatient);
  });

  // Table row select
  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      setSelectedPatient({
        id: row.id,
        picSrc: row.picSrc,
        name: row.name,
        age: row.age,
        gender: row.gender,
        city: row.city,
        sensorData: {
          temp: row.sensorData.temp,
          pulse: row.sensorData.pulse,
          fall: row.sensorData.fall
        },
        description: row.description,
        location: {
          lat: row.location.lat,
          long: row.location.long
        },
        telNo: row.telNo
      });
    }
  };

  return (
    <Container className='px-0 patients-table text-center' fluid>
      <BootstrapTable keyField='id' data={ patientList } columns={ columns } selectRow={selectRow} />
    </Container>
  );
}

export default PatientsTable;
