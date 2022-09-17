import React, { useState } from "react";
import Topbar from "../Component/Topbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import btn_reserve from "../img/Btn 3.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const base = require("../Config/ConfigUrl");
const ServiceDetail = () => {
  const Parameter = useParams();
  let history = useNavigate();

  let FormData = {
    _id: "",
    name: "",
    price: "",
    picture: "",
    description: "",
  };

  const [Data, setData] = useState(FormData);

  const config = {
    headers: { Authorization: `Bearer ${base.Token}` },
  };

  //const config : { headers: { Authorization: this.sauth.getToken("local") ) }}
  useEffect(() => {
    axios
      .get(base.URL + "/services/" + Parameter.id)
      .then((res) => {
        //console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Booking = () => {
    axios
      .post(base.URL + "/services/" + Parameter.id + "/booking", Data, config)
      //.get(baseURL.URL + "/orders", config)
      .then((res) => {
        // console.log(res.data);
        history("/ServiceOrder");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let name = Data.name || "กรุณากลับไปเลือกบริการก่อน";
  return (
    <>
      <Topbar />
      <Container className="div_detail ">
        <div className="body_Detail">
          <Row>
            <Col>
              <h1 className="h1-prompt-—-48pt">{name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="h2-prompt-—-32pt">฿{Data.price}</h2>
            </Col>
          </Row>
          <Row className="body-prompt-—-16pt div_descript">
            <Col>
              <span style={{ whiteSpace: "pre" }}> {Data.description}</span>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <img
                src={btn_reserve}
                alt=""
                className="btn_reserve"
                onClick={() => Booking()}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
<></>;

export default ServiceDetail;
