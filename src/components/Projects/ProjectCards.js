import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ zIndex: 10, position: 'relative', pointerEvents: 'auto' }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neon"
            style={{ marginRight: "10px", zIndex: 20, pointerEvents: 'auto' }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </a>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neon"
            style={{ zIndex: 20, pointerEvents: 'auto' }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
