import "./Homepage.css";
import img from "../assets/sample-img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import img1 from "../assets/Why us img 1.PNG";
import img2 from "../assets/Why us img 2.PNG";
import img3 from "../assets/Why us img 3.PNG";

function WhyUs() {
  return (
    <>
      <Container className="py-5 p-3">
        <h1 className="text-center whyUsMainHeading">
          alteration in some form, by injected business
        </h1>
        <br></br>
        <Container className="whyUsSecondHeadingCont">
          <h2 className="text-center whyUsSecondHeading">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humou.
          </h2>
        </Container>
        <Container className="pt-5 pb-5">
          <div className="row text-center p-3">
            <div className="col-4 whyUsContentCont">
              <img className="whyUsImg" src={img1} />
              <h1 className="whyUsContHeader pt-2">passages of Lorem Ipsum </h1>
              <p className="whyUsContText pt-2">
              Identify your most profitable Fiverr gigs and most lucrative offline contracts at a glance.
              </p>
            </div>
            <div className="col-4 whyUsContentCont">
            <img className="whyUsImg" src={img2} />
              <h1 className="whyUsContHeader pt-2">passages of Lorem Ipsum </h1>
              <p className="whyUsContText pt-2">
              Sync your banking to monitor, categorize, and understand your business expenses.
              </p>
            </div>
            <div className="col-4 whyUsContentCont">
            <img className="whyUsImg" src={img3} />
              <h1 className="whyUsContHeader pt-2">passages of Lorem Ipsum </h1>
              <p className="whyUsContText pt-2">
              Consult automated business reports that integrate your Fiverr and non-Fiverr activity.
              </p>
            </div>
          </div>
        </Container>
      </Container>
      {/* <div
        class="jumbotron jumbotron-fluid w-100 pt-5 pb-5 mb-5"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          class="ms-4 me-4 col-lg-6 p-4 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <h1 class="">2 Million+ developers</h1>
          <h1>from 150 countries</h1>
          <h1>have already joined Equipment</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div> */}
    </>
  );
}

export default WhyUs;
