import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expensetracker from "../../Assets/Projects/expensetracker.png";
import reactfileupload from "../../Assets/Projects/reactfileupload.png";
import news from "../../Assets/Projects/news.png";
import pixabay from "../../Assets/Projects/pixabay.png";
import tailwind from "../../Assets/Projects/tailwind.png";
import textconvert from "../../Assets/Projects/textconvert.png";


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
              description="This is a bassic Image gallery who created in react with tailwind CSS. It makes availablity of different kinds of images and also provides download facility and provide much more info like liks, downloads and more."
              ghLink="/"
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
              ghLink="/"
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
      </Container>
    </Container>
  );
}

export default Projects;
