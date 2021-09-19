import React from 'react';
import './assets/styles/App.scss';
import {Container} from "react-bootstrap";
import Top from "./components/Top/Top";

const App = () => {
  return (
    <Container className="App px-0" fluid>
      <Top />
    </Container>
  );
}

export default App;
