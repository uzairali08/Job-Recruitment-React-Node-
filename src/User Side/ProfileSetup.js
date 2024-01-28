import ProgressBar from "react-bootstrap/ProgressBar";
import {
  FaBeer,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import Messagebox from "../Chat box/Messagebox";
import "./UserSide.css";

function ProfileSetup() {
  const navigate = useNavigate();
  function buildResume() {
    navigate("/BuildResume");
  }
  return (
    <>
      <Header />
      <Messagebox />
      <Container>
        <div className="pt-5 pb-5">
          <div className="formContainer col-lg-6 offset-lg-3 p-4">
            <h3 className="text-center">Add Resume to Equipment</h3>
            <br></br>

            <div className="text-center p-2">
              <button className="formBtnProfile mx-2" type="button">
                Upload resume
              </button>
              <button className="formBtnProfile mx-2" onClick={buildResume}>
                Build resume
              </button>
            </div>

            <br></br>
            <p>
              By continuing, you agree to create a public resume and agree to
              receiving job opportunities from employers.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProfileSetup;
