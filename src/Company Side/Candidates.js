import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, Row, Table } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import Messagebox from "../Chat box/Messagebox";
import Sidebar2 from "../Sidebar/sidebar2";
import Header from "../header";
import Footer from "../footer";
import { useEffect, useState } from "react";

function Candidates() {
  const navigate = useNavigate();
  const [isCompanyBanned, setIsCompanyBanned] = useState(false);
  function postJob() {
    if (isCompanyBanned) {
      alert("You are banned. You cannot post a job.");
    } else {
      navigate("/PostJob");
    }
  }

  const storedUserInfo = localStorage.getItem("user-info");
  const userInfo = JSON.parse(storedUserInfo);
  const companyId = userInfo.company.comp_ID;

  useEffect(() => {
    const fetchCompanyBanStatus = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/IsCompanyBanned/${companyId}`
        );
        const data = await response.json();
        setIsCompanyBanned(data.banned);
      } catch (error) {
        console.error("Error retrieving company ban status:", error);
      }
    };

    fetchCompanyBanStatus();
  }, [companyId]);

  const [jobIds, setJobIds] = useState([]);
  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/GetCompID/${companyId}`
        );
        const data = await response.json();
        setJobIds(data);
      } catch (error) {
        console.error("Error retrieving job IDs:", error);
      }
    };

    fetchJobIds();
  }, [companyId]);

  const [userDetails, setUserDetails] = useState([]);
  // const jobId = '19'; // Replace with the actual job ID

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // const response = await fetch(`http://localhost:5000/api/Candidates/${jobIds}`);
        // const data = await response.json();
        // setUserDetails(data);

        // Using Promise.all to handle multiple requests
        const data = await Promise.all(
          jobIds.map(async (jobId) => {
            const response = await fetch(
              `http://localhost:5000/api/Candidates/${jobId}`
            );
            const data = await response.json();
            return data;
          })
        );

        // Flattening the array of arrays into a single array
        const flattenedData = data.flat();
        setUserDetails(flattenedData);
      } catch (error) {
        console.error("Error retrieving user details:", error);
      }
    };

    fetchUserDetails();
  }, [jobIds]);

  return (
    <>
      <Sidebar2>
        <Header />

        <Messagebox />
        <Navbar bg="none" className="pt-5">
          {/* <Container className='pt-4'> */}
          <Navbar.Brand>Candidates</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
            <button
              className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
              onClick={postJob}
              disabled={isCompanyBanned}
            >
              {isCompanyBanned ? "Banned to Post a Job" : "Post a Job"}
            </button>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
        <div>
          <div className="pt-3 pb-3">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Name</th>
                  <th>Phone No</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Education</th>
                  <th>Education Status</th>
                  <th>Skills</th>
                  <th>Relocation</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.map((user) => (
                  <tr key={user.user_ID}>
                    <td>{user.job_Title}</td>
                    <td>{user.user_Fname + " " + user.user_Lname}</td>
                    <td>{user.user_PhoneNo}</td>
                    <td>{user.user_Country}</td>
                    <td>{user.user_City}</td>
                    <td>{user.user_EduLevel + " " + user.user_FieldOfStudy}</td>
                    <td>{user.user_EduStatus}</td>
                    <td>{user.user_Skills}</td>
                    <td>{user.user_Relocation}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <Footer />
      </Sidebar2>
    </>
  );
}

export default Candidates;
