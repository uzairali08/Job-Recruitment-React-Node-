import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import rectangle1 from "../assets/Newsletter -Rectangle-1.png";
import rectangle2 from "../assets/Newsletter-Rectangle-2.png";
import rectangle3 from "../assets/Newsletter-Rectangle-3.png";
import { Container } from "react-bootstrap";

function Newsletter() {
  return (
    <>
      <div className="newsletterContainer">
        <div className="newsletterRect3"></div>
        <div className="newsletterRect2"></div>
        <div className="newsletterRect1">
            <h1 className="newsletterHeader">NEWSLETTER</h1>
            <h1 className="newsletterText">We Offer Every Month 20% Off For Our All Subscribers</h1>
            <div className="newsletterEmailSection">
                <input className="newsletterEmail ms-5" type="email" placeholder="Enter your email" />
                <button className="newsletterButton me-2">Subscribe</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
