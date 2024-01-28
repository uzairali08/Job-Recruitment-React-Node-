import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

function EditJobs() {
  const navigate = useNavigate();
  const location = useLocation();
  const jobId = new URLSearchParams(location.search).get("jobId");

  function editJobs(jobId) {
    navigate(`/UpdateJob?jobId=${jobId}`);
  }

  const [job, setJob] = useState(null);

  useEffect(() => {
    if (jobId) {
      fetch(`http://localhost:5000/api/EditJob/${jobId}`)
        .then((response) => response.json())
        .then((data) => {
          setJob(data.job);
        })
        .catch((error) => {
          console.error("Error fetching job details:", error);
        });
    }
  }, [jobId]);
  return (
    <>
      <Header />
      <div className="container pt-5 pb-5">
        {job === null ? (
          <p>Loading...</p>
        ) : (
          <div className="container">
            {/* <h2 className="text-center">{job.job_Title}</h2> */}
            <div className="text-center">
              <button
                className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
                onClick={() => editJobs(job.job_ID)}
              >
                Edit {job.job_Title}
              </button>
            </div>
            <br></br>
            <Row className="formInput p-2">
              <div className="col-lg">
                <h4>Basic Information</h4>
              </div>
              <div className="col-lg">
                <p>
                  <strong>Name: </strong>
                  {job.job_Title}
                </p>
                <p>
                  <strong>Location: </strong>
                  {job.job_Location}
                </p>
              </div>
            </Row>
            <br></br>
            <Row className="formInput p-2">
              <div className="col-lg">
                <h4>Details Provided</h4>
              </div>
              <div className="col-lg">
                <p>
                  <strong>Type: </strong>
                  {job.job_Type}
                </p>
                <p>
                  <strong>People limit: </strong>
                  {job.job_PeopleLimit}
                </p>
                <p>
                  <strong>Deadline: </strong>
                  {job.job_Deadline}
                </p>
              </div>
            </Row>
            <br></br>
            <Row className="formInput p-2">
              <div className="col-lg">
                <h4>Compensation</h4>
              </div>
              <div className="col-lg">
                <p>
                  <strong>Pay Range: </strong>
                  {job.job_PayRange}
                </p>
                <p>
                  <strong>Minimum Pay: </strong>
                  {job.job_PayMin}
                </p>
                <p>
                  <strong>Maximum Pay: </strong>
                  {job.job_PayMax}
                </p>
                <p>
                  <strong>Pay Rate: </strong>
                  {job.job_PayRate}
                </p>
              </div>
            </Row>
            <br></br>
            <Row className="formInput p-2">
              <div className="col-lg">
                <h4>Job Description</h4>
              </div>
              <div className="col-lg">
                <p>
                  <strong>Description: </strong>
                  {job.job_Desc}
                </p>
              </div>
            </Row>
            <br></br>
            <Row className="formInput p-2">
              <div className="col-lg">
                <h4>Application Preferences</h4>
              </div>
              <div className="col-lg">
                <p>
                  <strong>Resume Status: </strong>
                  {job.job_ResumeStatus}
                </p>
                <p>
                  <strong>Deadline Status: </strong>
                  {job.job_DeadlineStatus}
                </p>
                <p>
                  <strong>Rejection Status: </strong>
                  {job.job_RejectionStatus}
                </p>
              </div>
            </Row>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default EditJobs;
