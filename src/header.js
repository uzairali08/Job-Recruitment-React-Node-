import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

function Header() {
  const navigate = useNavigate();

  function loginButton() {
    navigate("/Login");
  }

  function bookAppointment() {
    navigate("/BookAppointment");
  }

  function logoutButton() {
    localStorage.clear();
    navigate("/");
  }

  function editProfile(userId) {
    navigate(`/EditProfile?userId=${userId}`);
  }

  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState(null); // Define the userInfo state variable

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo); // Set the userInfo state variable
      if (parsedUserInfo.company) {
        setEmail(parsedUserInfo.company.comp_Email);
      } else if (parsedUserInfo.user) {
        setEmail(parsedUserInfo.user.user_Email);
      } else if (parsedUserInfo.admin) {
        setEmail(parsedUserInfo.admin.admin_Email);
      }
    }
  }, []);

  const hideNotificationBar = () => {
    const notificationBar = document.querySelector(".headerNotificationBar");
    notificationBar.style.display = "none";
  };

  return (
    <>
      <div className="headerNotificationBar m-0">
        <p className="mx-auto pt-2 text-uppercase">Notification Bar</p>
        <button
          className="notificationBarCloseBtn me-1"
          onClick={() => hideNotificationBar()}
        >
          X
        </button>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="transparent">
        <Container fluid className="px-5">
          <Navbar.Brand className="logoH text-white" href="#home">
            Job Recruitment
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navBarLinks ms-auto me-3">
              {localStorage.getItem("user-info") ? (
                <></>
              ) : (
                <>
                  <Nav.Link className="mx-2" href="#home" active>
                    Home
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="#services">
                    Services
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="#pricing">
                    Pricing
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              {localStorage.getItem("user-info") ? (
                <>
                  <p className="my-auto mx-1">{email}</p>
                  {userInfo && userInfo.user && (
                    <>
                      <button
                        className="profileBtnH mx-2"
                        onClick={() => editProfile(userInfo.user.user_ID)}
                      >
                        <FaUserEdit width={"150px"} /> Edit Profile
                      </button>

                      <button
                        className="logoutBtnH mx-1"
                        onClick={bookAppointment}
                      >
                        Consult an Expert
                      </button>
                    </>
                  )}
                  <button className="logoutBtnH mx-1" onClick={logoutButton}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="hireTeamBtnH mx-1" onClick={loginButton}>
                    Hire a Team
                  </button>
                  <button className="getHiredBtnH mx-1" onClick={loginButton}>
                    Get Hired
                  </button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
