import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import askthedm from "../../Assets/Projects/askthedm_amazon.png";
import meriwether from "../../Assets/Projects/kathies_website.png";
import djangoBlog from "../../Assets/Projects/django_blog_project.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on in the past.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={askthedm}
              isBlog={false}
              title="AskTheDM"
              description="Ask the DM is a quick-reference tool designed for use during Dungeons and Dragons 5th edition play sessions. Some of its features include quickly getting info on items, spells, feats, and conditions, roll game dice with advantage, find a page in the handbook using your voice! Currently services 18,779, and counting, unique users since launch date in August 2016."
              ghLink="https://github.com/Eldres/askTheDM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meriwether}
              isBlog={false}
              title="Meriwether Candle and Bodyworks"
              description="I made this website by myself for my Aunt to be used with her candle and bodyworks home business. This was an excellent test of my knowledge and skills acquired from school and what I learned on my own!"
              ghLink="https://github.com/Eldres/meriwether_candle-bodyworks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoBlog}
              isBlog={true}
              title="Blog using Python and Django"
              description="A practice Blog project utilizing Python and the Django framework."
              ghLink="https://github.com/Eldres/Blog-with-python-django"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
