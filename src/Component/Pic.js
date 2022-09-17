import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Pic = (props) => {
  return (
    <>
      <Col md={4}>
        <a href={"/ServiceDetail/" + props.data._id}>
          <div className="Service_Row_div1">
            <img src={props.data.picture} alt="" />
          </div>
          <div className="Service_Row_div2 ">
            <span
              style={{
                paddingRight: "0px",
                width: "50%",
                overflow: "hidden",
              }}
            >
              {props.data.name}
            </span>
            <span style={{ paddingLeft: "20px" }}>
              <h6 className="h4-prompt-—-16pt">เริ่มต้น</h6>
            </span>
            <span>
              <h4 className="h5-prompt-—-24pt">฿{props.data.price}</h4>
            </span>
          </div>
        </a>
      </Col>
    </>
  );
};

export default Pic;
