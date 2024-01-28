import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row, Table } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Messagebox from '../Chat box/Messagebox';
import Sidebar2 from '../Sidebar/sidebar2';
import Footer from '../footer';
import Header from '../header';
import { useEffect, useState } from 'react';
import JobApplicationCount from './JobApplicationCount';
import DeleteJob from './DeleteJobFeedback';

function Jobs() {
  const navigate = useNavigate();
  const [isCompanyBanned, setIsCompanyBanned] = useState(false); // Added state to track banned status

  function postJob() {
    if (isCompanyBanned) {
      alert("You are banned. You cannot post a job.");
    } else {
      navigate("/PostJob");
    }
  }

  function editJobs(jobId) {
    navigate(`/EditJobs?jobId=${jobId}`);
  }

  function deleteJobFeedback() {
    navigate("/DeleteJobFeedback");
  }

  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");
    const userInfo = JSON.parse(storedUserInfo);
    const comp_ID = userInfo.company.comp_ID;

    fetch(`http://localhost:5000/api/IsCompanyBanned/${comp_ID}`) // Check if company is banned
      .then((response) => response.json())
      .then((data) => {
        setIsCompanyBanned(data.banned);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(`http://localhost:5000/api/GetJobsByCompID/${comp_ID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "No data found") {
          setJobsData([]);
        } else {
          setJobsData(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const deleteJob = async (jobId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/DeleteJob/${jobId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        // Job was successfully deleted
        // You might want to redirect to another page or update your component's state here
        deleteJobFeedback();
      } else {
        console.error('Error deleting job:', data.message);
        // Display an error message or handle the error in a way that suits your application
      }
    } catch (error) {
      console.error('Error deleting job:', error);
      // Display an error message or handle the error in a way that suits your application
    }
  };
  return (
    <>
    <Sidebar2>
      <Header />
    <Messagebox />
    <Navbar bg="none">
      <Container fluid className='pt-4'>
        <Navbar.Brand>Jobs</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
              <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={postJob} disabled={isCompanyBanned}>
                {isCompanyBanned ? "Banned to Post a Job" : "Post a Job"}
              </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <div className='row'>
            <div className='col-lg-2'>
            <input
                type="text"
                class="form-control"
                placeholder="Search Job Titles"
              />
            </div>
            <div className='col-lg-2'>
            <input
                type="text"
                class="form-control"
                placeholder="See Locations"
              />
            </div>
            <div className='col-5'></div>
            <div className='col-lg-1'>
            <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Posting Date</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Job Title</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Status</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div className='col-lg-2'>
            <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        Order By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Descending</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
        </div>
    </div>

    <div>
        <div className="pt-3 pb-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job Title</th>
                {/* <th>Location</th> */}
                <th>Type</th>
                <th>People to hire</th>
                {/* <th>Deadline</th> */}
                {/* <th>Pay Range</th> */}
                {/* <th>Minimum Pay</th> */}
                {/* <th>Maximum Pay</th> */}
                {/* <th>Pay Rate</th> */}
                {/* <th>Job Description</th> */}
                {/* <th>Submit Resume</th> */}
                {/* <th>Job has Deadline</th> */}
                {/* <th>Reject Resume</th> */}
                <th>Number of Applications</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {jobsData.map((job) => (
                <tr key={job.job_ID}>
                  <td>{job.job_Title}</td>
                  {/* <td>{job.job_Location}</td> */}
                  <td>{job.job_Type}</td>
                  <td>{job.job_PeopleLimit}</td>
                  {/* <td>{job.job_Deadline}</td> */}
                  {/* <td>{job.job_PayRange}</td> */}
                  {/* <td>{job.job_PayMin}</td> */}
                  {/* <td>{job.job_PayMax}</td> */}
                  {/* <td>{job.job_PayRate}</td> */}
                  {/* <td>{job.job_Desc}</td> */}
                  {/* <td>{job.job_ResumeStatus}</td> */}
                  {/* <td>{job.job_DeadlineStatus}</td> */}
                  {/* <td>{job.job_RejectionStatus}</td> */}
                  <td><JobApplicationCount jobId={job.job_ID} /></td>
                  <td><button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={() => editJobs(job.job_ID)} disabled={isCompanyBanned}>Edit</button>
                  <button className="btn btn-pill text-light shadow-lg rounded bg-danger mx-2" onClick={() => deleteJob(job.job_ID)} disabled={isCompanyBanned}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

    <Row className='p-3'>
        <div className='col-lg bg-white rounded p-3 m-2'>
            <h5>Message (0)</h5>
            <hr></hr>
            <p>No Messages to Review</p>
        </div>

        <div className='col-lg bg-white rounded p-3 m-2'>
            <span>
            <h5>Sponsored job billing</h5>
            <a href='#' className='text-right'>View FAQS</a>
            </span>
            
            <hr></hr>
            <Row>
                <div className='col-lg-6'>
                    <h5>Total</h5>
                    <h3>0.00 (USD)</h3>
                    <h5>For May 1-31</h5>
                </div>

                <div className='col-lg-4 p-2'>
                    <Row>
                    <button className="btn btn-pill text-light shadow-lg rounded bg-dark" type="button">Billing History</button>
                    </Row>
                    <br></br>
                    <Row>
                    <button className="btn btn-pill text-light shadow-lg rounded bg-dark" type="button">Payment Method</button>
                    </Row>
                </div>
            </Row>
        </div>
    </Row>
    <Footer />
    </Sidebar2>
    </>
  );
}

export default Jobs;
