import React from "react";
import Nav from "./Nav";
import Categories from "./Categories";
import { Container, Row, Col } from "reactstrap";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="6">
            <Nav />
          </Col >
          <Col xs="6">
            <Categories />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
