import React from 'react';
import {Container} from "react-bootstrap";
import Top from "../components/Top/Top";

const Dashboard = () => {
  return(
    <Container className='px-0 dashboard' fluid>
      <Top />
      Dashboard Comes Here!
    </Container>
  );
}

export default Dashboard;
