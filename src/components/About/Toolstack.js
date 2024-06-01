import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiWindows, SiOpenai, SiRender, SiNetlify, SiVercel, SiStackoverflow } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col   xs={4} md={2} className="tech-icons">
        <p style={{fontSize: '4rem'}}>
      Figma 

        </p>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiStackoverflow />
      </Col>
    </Row>
  );
}

export default Toolstack;
