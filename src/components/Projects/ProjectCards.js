import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineDownload } from "react-icons/ai"; // Import the download icon
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  // Function to handle the download action
  const handleDownload = () => {
    // Create a dummy link element
    const link = document.createElement("a");
    // Set the href attribute to the download link
    link.href = props.downloadLink;
    // Set the download attribute to specify the filename
    link.download = props.downloadFileName || "image.png";
    // Trigger a click event to start the download
    document.body.appendChild(link);
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Conditionally render the GitHub button */}
        {!props.hideGitHubButton && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* If download link provided, render the download button */}
        {props.downloadLink && (
          <Button
            variant="primary"
            onClick={handleDownload} // Call handleDownload function on click
            style={{ marginLeft: "10px" }}
          >
            <AiOutlineDownload /> &nbsp;
            {"Download Image"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
