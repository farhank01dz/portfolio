import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";  
import cpp from  "../../Assets/Projects/cpp.png"; 
import cloud from  "../../Assets/Projects/cloud.png"; 

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My   <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my Certificates.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cpp}
              isBlog={false}
              title="C++ from Coursera"
              demoLink="https://drive.google.com/file/d/1Id5NJlv7tFCbCQQ8aZRt84AvX0O2l0Vv/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud Computing from NPTEL"
              demoLink="https://drive.google.com/file/d/1X1M5tPZTBZFuPA_Cg516PeQ1yEUyKTd6/view?usp=drive_link"
            />
          </Col>
 
 
 
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
