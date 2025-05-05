import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiMongodb } from "react-icons/di";
import { SiAmazonaws, SiDocker } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;