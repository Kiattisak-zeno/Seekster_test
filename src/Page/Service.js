import React, { useState } from "react";
import "../Style/Service.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Topbar from "../Component/Topbar";
import axios from "axios";
import { useEffect } from "react";
import Pic from "../Component/Pic";

const baseURL = require("../Config/ConfigUrl");

const Service = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    axios
      .get(baseURL.URL + "/services")
      .then((res) => {
        //  console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const GetPic = () => {
    if (Data != undefined) {
      return Data.map((res, i) => {
        // console.log(Data[i].picture);
        return <Pic key={i} data={Data[i]} />;
      });
    }
  };

  return (
    <>
      <Topbar />
      <Container className="Service_Container">
        <Row className="body_Row">
          <Col>
            <h1 className="h1-prompt-—-48pt">คำบรรยายต่างๆนานา</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="body-prompt-—-16pt detail">
              เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน
              ทุกๆด้านอย่างที่คุณต้องการ
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          width: "1280px",
          padding: "20px 0px 50px 100px",
          border: "1px solid rgb(214, 214, 214) ",
        }}
      >
        <Row className=" Service_Row">
          <h2 className="h2-prompt-—-32pt" style={{ margin: "0px" }}>
            งานบริการ
          </h2>
          {GetPic()}
        </Row>
      </Container>
    </>
  );
};

export default Service;
