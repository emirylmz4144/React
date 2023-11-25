import React from "react";
import Nav from "./Nav";//Nav classı bize bir companent dönderecek ve tanınması için bunu yazıyoruz
import Categories from "./Categories";
import { Container, Row, Col } from "reactstrap";//Container , Row, Col gibi yapılar reactstrap ile default gelir

//Burası ana conteiner'a ait sınıftır yani birnevi document'i bu function temsil etmektedir
function App() {
  //React'ın ana mantığı container döndürmesi ve UI tarafını render yöntemi ile kolaylaştırmasıdır
  return (
    <div>
      <Container>
        <Row>{/*Sütün eklenerek Categories ve Nav'dan gelen companentleri aynı satır içinde görünmesini sağlar*/}
          <Col xs="6"> {/*Nav'classından gelen (tek companent ) grid sistemindeki 12 lik yapının 6 sını kapsayacak */}
            <Nav />
          </Col >
          <Col xs="6">{/*Categories'classından gelen (tek companent ) grid sistemindeki 12 lik yapının 6 sını kapsayacak */}
            <Categories />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
