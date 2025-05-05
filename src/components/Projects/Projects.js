import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bloodbankmanagement from "../../Assets/Projects/bloodbankmanagement.png";
import JobQuest from "../../Assets/Projects/jobquest.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import limeroad from "../../Assets/Projects/limeroad.png";
import foodDelight from "../../Assets/Projects/foodDelight.png";
import careerconnect from "../../Assets/Projects/careerconnect.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodDelight}
              isBlog={false}
              title="Food Delight"
              description="A web application for exploring and ordering meals, offering a wide range of recipes from various cuisines. Built to provide a user-friendly platform for users to discover and indulge in culinary delights."
              ghLink="https://github.com/AMANPUSHP23/foodapp.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerconnect}
              isBlog={false}
              title="Career-connect"
              description="Career-connect is a job portal built with the MERN stack, offering secure authentication, job posting, application tracking, and a responsive UI to connect job seekers and employers through role-based dashboards."
              ghLink="https://github.com/AMANPUSHP23/career-connect.git"
              
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A responsive and interactive personal portfolio website built with React.js, Tailwind CSS, and JavaScript. Features smooth navigation, animated sections, and GitHub/LinkedIn integration for professional branding."
              ghLink="https://github.com/AMANPUSHP23/Newportfolio.git"
              demoLink="https://amanpushp.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={limeroad}
              isBlog={false}
              title="Lime Road Clone"
              description="A shopping website clone built with React, featuring product browsing, user authentication, wishlist management, and dynamic data handling using JSON-Server APIs. Includes a responsive UI designed with Bootstrap and Chakra UI."
              ghLink="https://github.com/AMANPUSHP23/limeroad_clone.com.git"
             
            />
          </Col>
         

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloodbankmanagement}
              isBlog={false}
              title="Blood Bank Management System"
              description="A system to manage donor and recipient records, track blood inventory, and streamline operations. Built with Java and MySQL for secure access, real-time blood availability, and improved data accuracy."
              ghLink="https://github.com/AMANPUSHP23/Blood-Bank-Management-System.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JobQuest}
              isBlog={false}
              title="JobQuest"
              description="JobQuest is an advanced job-hunting platform featuring seamless user login, real-time job listings, smart filtering, and modern design—crafted using the MERN stack for a smooth, responsive, and secure experience."
              ghLink="https://github.com/AMANPUSHP23/JobQuest.git"
              demoLink="https://jobquesthunt.netlify.app/register"      
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
