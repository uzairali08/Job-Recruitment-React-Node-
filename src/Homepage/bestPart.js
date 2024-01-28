import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/img.jpg";
import company from "../assets/For Company.png";
import talent from "../assets/For Talent.png";
import { Col, Container, Row } from "react-bootstrap";

function BestPart() {
  return (
    <>
      {/* <Container className='pt-5 pb-5'>
        <Row>
            <div className='col-lg-5 my-auto'>
                <h3>
                Enterprise Suite
                </h3>
                <h1>
                This is how <br></br>
                good companies <br></br>
                find good company.
                </h1>
                <br></br>
                <p>
                Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.
                </p>
                <ul>
                    <li>Access expert talent to fill your skill gaps</li>
                    <li>Control your workflow: hire, classify and pay your talent</li>
                    <li>Partner with Upwork for end-to-end support</li>
                </ul>
                <br></br>
                <button type="submit" className="bestPartBtn mb-3">Learn More</button>
            </div>
            <div className='col-lg-7'>
                <img className='bestPartImg1 mx-auto' src={img} />
            </div>
        </Row>
    </Container> */}
      {/* <br></br> */}
      {/* <br></br> */}
      {/* <Container className='pt-5 pb-5'>
        <div className='row'>
        <div className='col-lg-7'>
                <img className='bestPartImg2 mx-auto' src={img} />
            </div>
            <div className='col-lg-5 my-auto'>
                <h3>
                For Talent
                </h3>
                <h1>
                Find talent<br></br>
                your way <br></br>
                </h1>
                <br></br>
                <p>
                Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
                </p>
                <br></br>
                <button type="submit" className="bestPartBtn">Learn More</button>
            </div>   
        </div>
    </Container> */}

      <Container className="pt-5 pb-5">
        <Row className="pt-3 pb-5">
          <Col lg={6} className="my-auto p-2">
            <div className="px-5">
              <h2 className="bestPartCompHeading1 mb-2">For Company</h2>
              <h1 className="bestPartCompHeading2 mb-2">
                This is how good comapanices find good work
              </h1>
              <p className="bestPartCompText">
                Use smart proposals that also seamlessly generate contracts,
                collect deposits, and so much more.
              </p>
              <button className="bestPartCompBtn">Hire a Team</button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <img className="bestPartCompImg" src={company} />
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <Container className="pt-5 pb-5">
        <Row className="pt-3 pb-5">
          <Col lg={6} className="text-center">
            <img className="bestPartTalentImg" src={talent} />
          </Col>
          <Col lg={6} className="my-auto p-2">
            <div className="px-5">
              <h2 className="bestPartTalentHeading1 mb-2">For Talent</h2>
              <h1 className="bestPartTalentHeading2 mb-2">
                Find talent your way
              </h1>
              <p className="bestPartTalentText">
                Easily edit and share pre-populated contracts that build secure,
                fair relationships between you and your clients.
              </p>
              <button className="bestPartTalentBtn">Get Hired Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BestPart;
