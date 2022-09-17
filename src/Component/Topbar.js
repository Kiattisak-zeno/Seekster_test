import React from "react";
import "../Style/Service.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Topbar = () => {
  return (
    <>
      <Container className="Topbar_Container">
        <Row className="body-prompt-—-16pt" style={{ width: "100%" }}>
          <Col md={9}></Col>
          <Col md={1}>
            <a href="/Service">บริการ</a>
          </Col>
          <Col md={1}>
            <a href="/ServiceOrder">รายการ</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Topbar;
