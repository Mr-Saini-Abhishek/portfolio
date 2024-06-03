import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards"; // Make sure to import ProjectCard
import Particle from "../Particle";
import secondary from "../../Assets/certificates/secondary.jpg";
import cwc from "../../Assets/certificates/cwc.jpg";
import cwc10th from "../../Assets/certificates/cwc10th.jpg";
import ralsa from "../../Assets/certificates/ralsa.jpg";
import software from "../../Assets/certificates/software.jpg";
import vit from "../../Assets/certificates/vit.jpg";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates In Academics </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={software}
              isBlog={false}
              title="Software Devlopment Persentation"
              description="In competition of software devlopment persentation in my college competition feb 2024. I got runner up price for my second rank in this competition. Among my batch mates and seniors."
              hideGitHubButton={true} 
              showDownloadButton={true}  
              downloadLink={software} 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secondary}
              isBlog={false}
              title="Certificate by District collector"
              description="I got 95% marks in my 10th board. In november I rewarded by from Department for Child Rights by district collector."
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={secondary} 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cwc10th}
              isBlog={false}
              title="Certificate by CWC"
              description="I got appreciation letter from child welfare committee for my 10th percentage."
              ghLink="https://github.com/Mr-Saini-Abhishek/Image_Finder_Material_UI"
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={cwc10th} 

            />
          </Col>

         
        </Row>



        {/* Figma Projects Section */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates In Cultural </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vit}
              isBlog={false}
              title="Certificate by VIT"
              description="I got certificate from Vivekanand Institute of Technology for my participation in cultural program."
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={vit} 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ralsa}
              isBlog={false}
              title="Certificate from RSLSA"
              description="I got certificate from Rajsthan Rajy Vidhik Seva Pradhikaran, Jaipur for my participation in cultural program."
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={ralsa} />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cwc}
              isBlog={false}
              title="Certificate from CWC"
              description="I got certificate from Child welfare Committee, Jaipur for my participation in cultural program. "
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={cwc} />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
