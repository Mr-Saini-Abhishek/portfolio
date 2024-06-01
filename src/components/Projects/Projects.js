import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // Make sure to import ProjectCard
import Particle from "../Particle";
import expensetracker from "../../Assets/Projects/expensetracker.png";
import reactfileupload from "../../Assets/Projects/reactfileupload.png";
import news from "../../Assets/Projects/news.png";
import pixabay from "../../Assets/Projects/pixabay.png";
import tailwind from "../../Assets/Projects/tailwind.png";
import textconvert from "../../Assets/Projects/textconvert.png";
import anime from "../../Assets/Projects/anime.jpg";
import gamingconsole from "../../Assets/Projects/gamingconsole.jpg";
import modern3d from "../../Assets/Projects/modern3d.jpg";
import nike from "../../Assets/Projects/nike.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works In MERN </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News-Note"
              description="A news app who get news from an api and provides many kind of news from various authors and publishers. This app also helpful for create notes according the news who is very good source for students who studing in current affairs."
              ghLink="https://github.com/Mr-Saini-Abhishek/NewsNote"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tailwind}
              isBlog={false}
              title="Tailwind-Css image gallery"
              description="This is a basic Image gallery who created in react with tailwind CSS. It makes availablity of different kinds of images and also provides download facility and provide much more info like liks, downloads and more."
              ghLink="https://github.com/Mr-Saini-Abhishek/Tailwind-CSS-Image-Gallery/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pixabay}
              isBlog={false}
              title="Pixabay Image finder"
              description="This is a Image finder app who can helps for find any kind of image accoring to the requirement and quantity. It also provide facility of instead download"
              ghLink="https://github.com/Mr-Saini-Abhishek/Image_Finder_Material_UI"
              demoLink="https://mr-saini-abhishek.github.io/Image_Finder_Material_UI/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensetracker}
              isBlog={false}
              title="Expense Tracker"
              description="This web app is useful for all users who want to manage their expenses. This Website provides a user frindly interface who is so helful for check out the income and expenses with their total and much more."
              ghLink="https://github.com/Mr-Saini-Abhishek/Expense-Tracker-Frontend"
              demoLink="https://expense-tracker-frontend-8ez2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textconvert}
              isBlog={false}
              title="Text Enhancer"
              description="This website provides a user friendly facility for Enhance any kind of text it also helps for count words and predict the reading type of text and much more."
              ghLink="https://github.com/Mr-Saini-Abhishek/Text-Enhancer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactfileupload}
              isBlog={false}
              title="React File Uploader"
              description="This is a react app where you can upload your files or images and you also got your images and files in upload section with a user friendly interface."
              ghLink="https://github.com/Mr-Saini-Abhishek/react-file-uploader"
            />
          </Col>
        </Row>



        {/* Figma Projects Section */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Works In Figma </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects of designing I've worked on recently.
        </p>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nike}
              isBlog={false}
              title="Nike shoe Design"
              description="A modern Nike shoe design for marketing the brand in a modern style with such good looking effects."
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={nike} 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={modern3d}
              isBlog={false}
              title="Modern 3D Design "
              description="Modern 3D wallpaper design in figma with many good looking glassmorphism effects."
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={modern3d} />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anime}
              isBlog={false}
              title="Anime Charachter Wallpaper design "
              description="A figma design of anime wallpaper with cool and good looking postures. "
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={anime} />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamingconsole}
              isBlog={false}
              title="PS5 Gaming Console"
              description="A simple and good looking design of PS5 gaming console in many colors with more detailing."
              hideGitHubButton={true} 
              showDownloadButton={true} 
              downloadLink={gamingconsole} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
