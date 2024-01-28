import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Header from "../header";
import Messagebox from "../Chat box/Messagebox";
import { useEffect, useState } from "react";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
import seach from "../assets/search.png";
import loc from "../assets/location.png";
import line from "../assets/line.png";

function JobFeed() {
  const navigate = useNavigate();

  function bookAppointment() {
    navigate("/BookAppointment");
  }

  const [jobsData, setJobsData] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [user_id, setUser_id] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [location, setLocation] = useState("");
  const [searchKeyword, setSearchKeyword] = useState(""); // New state variable for search keyword

  const jobsPerPage = 2;

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      const user_ID = userInfo.user.user_ID;
      setUser_id(user_ID);
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/GetAllJobs")
      .then((response) => response.json())
      .then(async (data) => {
        const activeJobs = [];
        for (let job of data) {
          const pauseStatusRes = await fetch(
            `http://localhost:5000/api/CheckJobPauseStatus/${job.job_ID}`
          );
          const pauseStatusData = await pauseStatusRes.json();
          if (!pauseStatusData.paused) {
            activeJobs.push(job);
          }
        }

        // Filter jobs based on entered location
        const filteredJobs = activeJobs.filter((job) =>
          job.job_Location.toLowerCase().includes(location.toLowerCase())
        );

        // Filter jobs based on entered search keyword
        const keywordFilteredJobs = filteredJobs.filter(
          (job) =>
            job.job_Title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            job.job_Desc.toLowerCase().includes(searchKeyword.toLowerCase())
        );

        setJobsData(keywordFilteredJobs);
        setDisplayedJobs(keywordFilteredJobs.slice(0, jobsPerPage));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [location, searchKeyword]); // Add searchKeyword as a dependency

  const handleShowMoreJobs = () => {
    const nextPage = currentPage + 1;
    const indexOfLastJob = nextPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const nextJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);
    setDisplayedJobs([...displayedJobs, ...nextJobs]);
    setCurrentPage(nextPage);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      user_ID: user_id,
      job_ID: selectedJob.job_ID,
    };

    fetch("http://localhost:5000/api/JobApplications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          alert("You have already applied for this job");
          throw new Error("Job application failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSelectedJob(null);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="jobFeedPage">
        <Header />
        <Messagebox />
        <Container>
          <Row className="pt-5 pb-5 searchCont">
            {/* <div className="col-lg-1"></div> */}
            {/* <div className="col-lg-4"> */}
            <div className="searchJobCont mx-3">
              <p className="searchJobFieldText">What</p>
              <input
                type="text"
                className="form-control searchJobField"
                placeholder="Job title, Description etc."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <img className="searchJobIcon" src={seach} />
            </div>
            {/* </div> */}
            {/* <div className="col-lg-4"> */}
            <div className="searchLocCont mx-3">
              <p className="searchLocFieldText">Where</p>
              <input
                type="text"
                className="form-control searchLocField"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <img className="searchLocIcon" src={loc} />
            </div>
            {/* </div> */}

            {/* <div className="col-lg-2 text-center">
            <button
              className="btn btn-pill text-light shadow-lg rounded bg-dark"
              type="button"
              onClick={bookAppointment}
            >
              Consult an Expert
            </button>
          </div> */}
          </Row>

          <h3 className="jobFeedHeading text-center pt-3">Job Feed</h3>
          <img className="d-block m-auto pt-2 pb-2" src={line} />
        </Container>
        <Container fluid>
          {/* <div className="text-center pt-2"> */}
          {/* <button className="btn">Job Feed</button>
          <button className="btn">Recent Searches</button> */}
          <hr></hr>
          {/* </div> */}

          <Container>
            {/* <h3 className="text-center">Job Feed</h3> */}
            <Row className="pt-4 pb-5 jobFeedDisplay">
              {/* <p>Jobs based on your activity on Recruitment</p> */}
              <div className="col-lg-5">
                {displayedJobs.map((job) => (
                  <>
                    <div
                      className="displayJobs p-4 mb-4"
                      key={job.job_ID}
                      onClick={() => handleJobClick(job)}
                    >
                      <Row className="pt-2 pb-2">
                        <div className="col-lg">
                          <p className="displayJobTitle">{job.job_Title}</p>
                        </div>
                        <div className="col-lg">
                          <p className="displayJobPay">
                            {job.job_PayMin} to {job.job_PayMax}{", "}
                            {job.job_PayRate}
                          </p>
                        </div>
                      </Row>
                      
                      <p className="displayJobLocation"><strong>Company Location : </strong>{job.job_Location}</p>

                      {/* <Row>
                        <div className="col-lg text-center"></div>
                        <div className="col-lg text-center">
                          <p className="bg-secondary text-white">
                            {job.job_Type}
                          </p>
                        </div>
                      </Row> */}
                      <p className="displayJobType">
                        <strong>Job Type : </strong>
                            {job.job_Type}
                          </p>

                      {/* <p>Hiring {job.job_PeopleLimit} candidates</p> */}

                      <p className="displayJobDescription"><strong>Job Description : </strong></p>
                      <p className="displayJobDescription">{job.job_Desc}</p>
                    </div>
                  </>
                ))}

                {jobsData.length > displayedJobs.length && (
                  <button
                    className="jobFeedShowMoreJobs"
                    onClick={handleShowMoreJobs}
                    type="button"
                  >
                    Show More Jobs
                  </button>
                )}
                <br></br>
              </div>
              <div className="col-lg-5">
                {selectedJob && (
                  <div className="selectedJobDisplay p-4">
                    <Row className="pt-2 pb-2">
                      <div className="col-lg">
                      <p className="selectedJobTitle">{selectedJob.job_Title}</p>
                      </div>
                      <div className="col-lg">
                      <button
                        className="selectedJobApplyBtn"
                        onClick={handleSubmit}
                      >
                        Apply Now
                      </button>
                      </div>
                    </Row>
                    {/* <h2 className="text-center">{selectedJob.job_Title}</h2> */}
                    {/* <div className="col-12 text-center">
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark my-2"
                        onClick={handleSubmit}
                      >
                        Apply for this Job
                      </button>
                    </div> */}
                    <p className="selectedJobLocation"><strong>Company Location : </strong>{selectedJob.job_Location}</p>

                    <p className="selectedJobType"><strong>Job Type : </strong>{selectedJob.job_Type}</p>

                    <p className="selectedJobOpening"><strong>Number of openings for this role : </strong>{selectedJob.job_PeopleLimit}</p>

                    <p className="selectedJobHiring"><strong>Hiring candidates in : </strong>{selectedJob.job_Deadline}</p>

                    <p className="selectedJobPayRange"><strong>Pay Range : </strong>{selectedJob.job_PayRange}</p>

                    <p className="selectedJobPayMin"><strong>Minimum Pay : </strong>{selectedJob.job_PayMin}</p>

                    <p className="selectedJobPayMax"><strong>Maximum Pay : </strong>{selectedJob.job_PayMax}</p>

                    <p className="selectedJobPayRate"><strong>Pay Rate : </strong>{selectedJob.job_PayRate}</p>

                    <p className="selectedJobDescription"><strong>Job Description : </strong></p>
                    <p>{selectedJob.job_Desc}</p>
                  </div>
                )}
              </div>
            </Row>
          </Container>
        </Container>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default JobFeed;
