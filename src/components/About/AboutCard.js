import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Pushp</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I am a passionate full-stack developer skilled in building modern web applications
            using the <b className="purple">MERN stack, Java, and Spring Boot</b>.
            <br />
            I have a strong foundation in data structures, algorithms, and databases,
            and love working with tools like <b className="purple">Docker, AWS, and GitHub</b>.
            <br />
            <br />
            I’m always eager to learn new technologies and build scalable solutions that solve real-world problems.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring cloud and DevOps tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Building open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech videos & reading blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose. Learn with passion. Deliver with impact."{" "}
          </p>
          <footer className="blockquote-footer">Aman Pushp</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
