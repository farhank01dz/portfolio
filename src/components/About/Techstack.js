import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { 
  DiReact, 
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiCplusplus,  
  SiHtml5,
  SiCss3,  
} from "react-icons/si"; 
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
