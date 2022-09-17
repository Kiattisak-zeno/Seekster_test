import React, { useEffect } from "react";
import Topbar from "../Component/Topbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clock from "../img/clock.png";
import calendar from "../img/calendar.png";
const Row_order = (props) => {
  let createdAt = props.Data.createdAt;
  let name = props.Data.service.name;
  let price = props.Data.service.price;

  //     day:
  // The representation of the day.
  // Possible values are "numeric", "2-digit".
  // weekday:
  // The representation of the weekday.
  // Possible values are "narrow", "short", "long".
  // year:
  // The representation of the year.
  // Possible values are "numeric", "2-digit".
  // month:
  // The representation of the month.
  // Possible values are "numeric", "2-digit", "narrow", "short", "long".
  // hour:
  // The representation of the hour.
  // Possible values are "numeric", "2-digit".
  // minute: The representation of the minute.
  // Possible values are "numeric", "2-digit".
  // second:
  // The representation of the second.
  // Possible values are "numeric", 2-digit".

  let dt = new Date(Date.parse(createdAt));

  const D = dt.toLocaleDateString("en-US", { day: "2-digit" });
  const M = dt.toLocaleDateString("en-US", { month: "short" });
  const Y = parseInt(dt.toLocaleDateString("en-US", { year: "numeric" }));
  const h = dt.toLocaleString("th", { hour: "numeric" });
  const m = dt.toLocaleString("th", { minute: "numeric" });
  const s = dt.toLocaleString("th", { second: "numeric" });

  const FullDay = D + " " + M + " " + Y;
  const Time = h + ":" + m + ":" + s;
  //console.log(FullDay);
  //console.log(Time);
  return (
    <>
      <Row>
        <Col className="col_li">
          <li>
            <Container>
              <Row style={{ width: "100%" }} className="">
                <Col md={5} style={{ textAlign: "left" }}>
                  <h5> {name}</h5>
                </Col>
                <Col md={4}></Col>
                <Col md={3} style={{ textAlign: "right" }}>
                  <h4 className="h4-prompt-—-16pt">ราคา</h4>{" "}
                  <h5 className="h5-prompt-—-24pt">฿{price}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      fontSize: "12px",
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={calendar}
                      alt=""
                      width="20px"
                      style={{ marginRight: "10px" }}
                    />
                    <p style={{ display: "inline-block", marginTop: "0px" }}>
                      {" "}
                      {FullDay}
                    </p>
                    <img
                      src={clock}
                      alt=""
                      width="20px"
                      style={{ marginLeft: "40px", marginRight: "10px" }}
                    />
                    <p style={{ display: "inline-block" }}>{Time}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </li>
        </Col>
      </Row>
    </>
  );
};

export default Row_order;
