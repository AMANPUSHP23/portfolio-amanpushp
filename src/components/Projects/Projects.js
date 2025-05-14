import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import JobQuest from "../../Assets/Projects/jobquest.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import limeroad from "../../Assets/Projects/limeroad.png";
import foodDelight from "../../Assets/Projects/foodDelight.png";
import careerconnect from "../../Assets/Projects/careerconnect.png";
import routinezen from "../../Assets/Projects/routinezen.png";
import aiplanner from "../../Assets/Projects/aiplanner.png";
import lifeline from "../../Assets/Projects/lifeline.png";
import pushpsetu from "../../Assets/Projects/pushpsetu.png";
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
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A responsive and interactive personal portfolio website built with React.js, Tailwind CSS, and JavaScript. Features smooth navigation, animated sections, and GitHub/LinkedIn integration for professional branding."
              ghLink="https://github.com/AMANPUSHP23/portfolio-amanpushp.git"
              demoLink="https://amanpushp23.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={routinezen}
              isBlog={false}
              title="routinezen"
              description="A cutting-edge, futuristic web app for tracking and managing daily routines. Built with React and a powerful tech stack, RoutineZen blends sleek design and smooth animations to deliver an immersive user experience."
              ghLink="https://github.com/AMANPUSHP23/RoutineZen.git"
              demoLink="https://routinezen.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiplanner}
              isBlog={false}
              title="aiplanner"
              description="The AI-Planner Dashboard is a futuristic platform that merges AI automation, sleek UI, and real-time interactions to streamline social media strategy and personal planning, simulating SaaS features and OpenAI-powered capabilities."
              ghLink="https://github.com/AMANPUSHP23/AI-planner.git"
              demoLink="https://ai-planner-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pushpsetu}
              isBlog={false}
              title="pushpsetu"
              description="PUSHP SETU is a futuristic House Management System that simplifies household tasks like tracking chores, managing expenses, and organizing inventory through a sleek, responsive interface designed to streamline and smarten daily living."
              ghLink="https://github.com/AMANPUSHP23/Pushp-Setu.git"
              demoLink="https://pushp-setu.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lifeline}
              isBlog={false}
              title="lifeline"
              description="A modern web-based Blood Bank Management System designed to streamline blood donation and transfusion by connecting donors, recipients, and hospitals in real time with intuitive UI, smart search, and efficient coordination."
              ghLink="https://github.com/AMANPUSHP23/LifeLine-Blood-System.git"
              demoLink="https://lifeline-blood-system.netlify.app/"
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
              imgPath={limeroad}
              isBlog={false}
              title="Lime Road Clone"
              description="A shopping website clone built with React, featuring product browsing, user authentication, wishlist management, and dynamic data handling using JSON-Server APIs. Includes a responsive UI designed with Bootstrap and Chakra UI."
              ghLink="https://github.com/AMANPUSHP23/limeroad_clone.com.git"
             
            />
          </Col>
         

         
    

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
