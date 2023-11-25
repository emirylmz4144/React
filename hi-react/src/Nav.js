import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

//react companent class
export default class Nav extends Component {


  render() {
    return (
      <div>
        <h2>Conteiner of React companent class from Nav</h2>
        <Spinner color="primary">
          Loading...
        </Spinner>
        <Spinner color="secondary">
        s  Loading...
        </Spinner>
        <Spinner color="success">
          Loading...
        </Spinner>
        <Spinner color="danger">
          Loading...
        </Spinner>
        <Spinner color="warning">
          Loading...
        </Spinner>
        <Spinner color="info">
          Loading...
        </Spinner>
        <Spinner color="light">
          Loading...
        </Spinner>
        <Spinner color="dark">
          Loading...
        </Spinner>
      </div>
    );
  }
}

