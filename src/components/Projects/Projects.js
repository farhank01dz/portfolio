import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import search from "../../Assets/Projects/search.png";
import weather from "../../Assets/Projects/weather.png";
import zerodha from "../../Assets/Projects/zerodha.png";
 

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
              imgPath={weather}
              isBlog={false}
              title="Live Weather"
              description="Weather Forecasting React UI is a responsive web application built with React.js that provides real-time weather information for cities worldwide. Utilizing the OpenWeatherMap API, it offers current weather conditions, including temperature, humidity, and wind speed, with dynamic icons representing various weather states."
              ghLink="https://github.com/farhank01dz/weather"
              demoLink="https://weather-five-ashen.vercel.app/"              
            />
          </Col>  
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
