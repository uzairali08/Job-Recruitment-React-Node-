import img from "../assets/sample-img.png";
import img1 from "../assets/sample-logo.png";
import img2 from "../assets/card-bg.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./Homepage.css";

function GlobalReach() {
  return (
    <>
      <div className="py-5 p-3">
        <h1 className="mx-5">
          Equipment combines global reach and AI to deliver your ideal remote
          developers
        </h1>
        <div className="globalReachCard col-lg-3 m-3">
          <Card className="globalReachCardBox p-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <br></br>
              <Card.Title>Tailored to your requirements</Card.Title>
              <Card.Text>
                <ul>
                  <li>Role</li>
                  <li>Tech Stack</li>
                  <li>Seniority Level</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="globalReachCard col-lg-5 m-3">
          <Card className="globalReachCardBox p-3">
            <Card.Body>
              <Card.Title className="text-center mx-3">
                <h3>Our Talent Cloud platform leverages</h3>
              </Card.Title>
              <br></br>
              <Card.Text>
                <div className="globalReachList mx-3">
                  <li>Global Sourcing</li>
                  <li>Intelligent Vetting</li>
                  <li>Extensive Matching</li>
                  <li>Payments Compliance</li>
                  <li>Automated On-The-Job Quality Control</li>
                </div>
                <br></br>
                <button className="globalReachBtn offset-3">Learn More</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="globalReachCard col-lg-3 m-3">
          <Card className="globalReachCardBox p-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <br></br>
              <Card.Title>Your ideal developer</Card.Title>
              <Card.Text>
                <ul>
                  <li>Typical engagement:</li>
                  <li>Full-time</li>
                  <li>Time zone overlap:</li>
                  <li>4 hours</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default GlobalReach;
