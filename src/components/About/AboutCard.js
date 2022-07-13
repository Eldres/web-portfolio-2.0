import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="blue">Josh Nagel </span>
            from <span className="blue"> Helena, Montana.</span>
            <br />I am a software engineer with 3 years experience in the
            industry, mainly doing Front-end development.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Board Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(111 132 231)" }}>
            "Strive to build things that remove friction for day-to-day life!"
          </p>
          <footer className="blockquote-footer">Me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
