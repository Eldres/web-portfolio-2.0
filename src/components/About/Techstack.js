import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiKotlin,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" alt="Javascript">
        <DiJavascript1 title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Nodejs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Nextdotjs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin title="Kotlin" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="Postgresql" />
      </Col>
    </Row>
  );
}

export default Techstack;
