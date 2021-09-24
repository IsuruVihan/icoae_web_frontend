import React, {useState} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import {Container} from "react-bootstrap";
import AmbulanceDetailsPanel from "./AmbulanceDetailsPanel";

// Dummy data
const availableAmbulanceList = [{
  id: 1,
  name: 'Yasith',
  availability: 1,
  distance: 23.76,
  telNo: '768036130'
}, {
  id: 2,
  name: 'Asela',
  availability: 0,
  distance: 6.76,
  telNo: '768036130'
}];

// Table columns
const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  hidden: true
}, {
  dataField: 'name',
  text: 'Name',
  hidden: true
}, {
  dataField: 'availability',
  text: 'Avail',
  sort: true
}, {
  dataField: 'distance',
  text: 'Dist',
  sort: true,
}, {
  dataField: 'telNo',
  text: 'Tel',
  hidden: true
}];

const AvailableAmbulancesTable = () => {
  const [selectedAmbulance, setSelectedAmbulance] = useState({
    id: '',
    name: '',
    availability: '',
    distance: '',
    telNo: ''
  });

  // Table row select
  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      setSelectedAmbulance({
        id: row.id,
        name: row.name,
        availability: row.availability,
        distance: row.distance,
        telNo: row.telNo
      });
    }
  };

  return (
    <Container className='px-0 available-ambulances-table text-center' fluid>
      <label className='title py-2'>Available Ambulances</label>
      <BootstrapTable keyField='id' data={availableAmbulanceList} columns={columns} selectRow={selectRow}/>
      <AmbulanceDetailsPanel selectedAmbulance={selectedAmbulance}/>
    </Container>
  );
}

export default AvailableAmbulancesTable;
