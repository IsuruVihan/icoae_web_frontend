import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container } from "react-bootstrap";

// Dummy data
const ambulanceList = [{
  id: 2,
  picSrc: '',
  name: 'Nimal Kamal',
  age: '28',
  gender: 'Male',
  city: 'Fort',
  ambulanceNo: 'WP-2333',
  telNo: '0786786546',
  location: {
    lat: 6.93564,
    long: 79.84568
  },
  status: 'available'
}];

// Table columns
const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true
}, {
  dataField: 'picSrc',
  text: 'picSrc',
  hidden: true
}, {
  dataField: 'name',
  text: 'Name',
  hidden: true
}, {
  dataField: 'age',
  text: 'Age',
  hidden: true
}, {
  dataField: 'gender',
  text: 'Gender',
  hidden: true
}, {
  dataField: 'city',
  text: 'City',
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
  text: 'TelephoneNumber',
  hidden: true
}, {
  dataField: 'ambulanceNo',
  text: 'AmbulanceNumber',
  hidden: true
}, {
  dataField: 'status',
  text: 'Status'
},];

const AmbulancesTable = ({ onChangeSelectedAmbulance }) => {
  const [selectedAmbulance, setSelectedAmbulance] = useState({
    id: '',
    picSrc: '',
    name: '',
    age: '',
    gender: '',
    city: '',
    location: {
      lat: '',
      long: ''
    },
    ambulanceNo: '',
    telNo: '',
    status: ''
  });

  useEffect(() => {
    onChangeSelectedAmbulance(selectedAmbulance);
  });

  // Table row select
  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      setSelectedAmbulance({
        id: row.id,
        picSrc: row.picSrc,
        name: row.name,
        age: row.age,
        gender: row.gender,
        city: row.city,
        location: {
          lat: row.location.lat,
          long: row.location.long
        },
        telNo: row.telNo,
        ambulanceNo: row.ambulanceNo,
        status: row.status
      });
    }
  };

  return (
    <Container className='px-0 alerts-table text-center' fluid>
      <BootstrapTable keyField='id' data={ambulanceList} columns={columns} selectRow={selectRow} />
    </Container>
  );
}

export default AmbulancesTable;
