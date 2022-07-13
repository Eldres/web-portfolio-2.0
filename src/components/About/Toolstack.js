import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiGnubash,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos title="macos" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash title="Gnubash" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" />
      </Col>
    </Row>
  );
}

export default Toolstack;
