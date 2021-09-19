import React from 'react';
import './assets/styles/App.scss';
import {Container} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const App = () => {
  return (
    <Container className="App px-0" fluid>
      <Router>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
