import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import walmart from "../assets/walmart.png";
import google from "../assets/google.png";
import fedx from "../assets/fedX.png";
import fedex from "../assets/fedEx.png";
import microsoft from "../assets/microsoft.png";
import amazon from "../assets/amazon.png";
import ola from "../assets/ola.png";
function TrustedBy() {
  return (
    <>
      <div className="pt-5 pb-5">
        <div className="container trustedByImgContainer pt-5 pb-2">
          <div className="trustedByImg text-center mx-3">
            <img src={fedex} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={google} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={ola} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={microsoft} />
          </div>
        </div>

        <div className="container trustedByImgContainer pb-5 pt-2">
          <div className="trustedByImg text-center mx-3">
            <img src={amazon} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={fedx} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={walmart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TrustedBy;
