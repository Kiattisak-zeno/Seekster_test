import React, { useEffect, useState } from "react";

import Topbar from "../Component/Topbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Style/Service.scss";
import axios from "axios";
import Row_order from "../Component/Row_order";

// import { useSelector } from "react-redux";

const base = require("../Config/ConfigUrl");

const Orders_List = () => {
  const [Data, setData] = useState();
  ///const user = useSelector((state) => state.user.value);

  const config = {
    headers: { Authorization: `Bearer ${base.Token}` },
  };
  // console.log(config);
  useEffect(() => {
    if (base.Token) {
      axios
        .get(base.URL + "/orders", config)
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [base.Token]);

  const Datarow = () => {
    if (Data != undefined) {
      return Data.map((data, i) => {
        if (i != 0) {
          return <Row_order key={i} Data={Data[i]} />;
        }
      });
    }
  };
  // console.log(Data[1].service.name);
  return (
    <>
      <Topbar />
      <Container className="div_OrderList">
        <div className="div_bodyOrderList">
          <Row>
            <Col className="">
              <h1 className="h1-prompt-—-48pt">รายการ</h1>
            </Col>
          </Row>

          {Datarow()}
        </div>
      </Container>
    </>
  );
};

export default Orders_List;
