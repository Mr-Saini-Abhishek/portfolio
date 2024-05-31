import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Saini </span>
            from <span className="purple">Jaipur, Rajsthan, India.</span>
            <br />
            I am currently pursing BCA from Shankara Institute of Technology associated from Rajsthan University.
            <br />
           I have completed secondary and higher secondary education from Rajsthan Board.
           And I also have a certificate course of RSCIT from Vardhman Kota Open University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Poetry Writing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Start still working without looking at the clock!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
