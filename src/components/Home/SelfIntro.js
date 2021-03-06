import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Software Engineer living in Montana, and grew up in
              California.
              <br />
              <br />
              I'm fluent in Front-end classics like
              <i>
                <b className="blue">
                  {" "}
                  Javascript, React, Node.js and Typescript.
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new and exciting
              <i>
                <b className="blue"> Web Technologies and Products.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="blue">connect</span> with me!
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Eldres"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub title="github" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joshnagel27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn title="linkedin" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
