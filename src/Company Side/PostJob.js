import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Form, Alert } from "react-bootstrap";
import Header from "../header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const navigate = useNavigate();
  function job() {
    navigate("/Jobs");
  }
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [fieldsInputError, setFieldsInputError] = useState("");

  const handle1 = () => {
    if (!job_Title || !job_Location) {
      setFieldsInputError("Kindly fill the required fields!!!");
    } else {
      setFieldsInputError("");
      setShow1(!show1);
      setShow2(!show2);
    }
  };
  const handle2 = () => {
    if (!job_Type || !job_PeopleLimit || !job_Deadline) {
      setFieldsInputError("Kindly fill the required fields!!!");
    } else {
      setFieldsInputError("");
      setShow2(!show2);
      setShow3(!show3);
    }
  };
  const handle3 = () => {
    setShow3(!show3);
    setShow4(!show4);
  };
  const handle4 = () => {
    if(!job_Desc){
      setFieldsInputError("Kindly fill the required fields!!!");
    }else{
      setFieldsInputError("");
      setShow4(!show4);
      setShow5(!show5);
    }
  };
  const handle5 = () => {
    if(!job_ResumeStatus || !job_RejectionStatus){
      setFieldsInputError("Kindly fill the required fields!!!");
    }else{
      setFieldsInputError("");
      setShow5(!show5);
      setShow6(!show6);
    }
  };
  const handle6 = () => {
    setShow6(!show6);
    job();
  };


  const editJobDesc = () => {
    setShow6(!show6);
    setShow4(!show4);
  }

  const editCompensation = () => {
    setShow6(!show6);
    setShow3(!show3);
  }

  const editDetails = () => {
    setShow6(!show6);
    setShow2(!show2);
  }

  const editInfo = () => {
    setShow6(!show6);
    setShow1(!show1);
  }

  // Basic Information
  // const [jobTitle, setJobTitle] = useState('');
  // const [jobLocation, setJobLocation] = useState('');
  // const [message, setMessage] = useState('');

  // const basicInfo = (event) => {
  //   event.preventDefault();

  //   const jobData = {
  //     job_Title: jobTitle,
  //     job_Location: jobLocation,
  //   };

  //   fetch('http://localhost:5000/api/BasicInfo', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(jobData),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         handle1();
  //         return response.json();
  //       } else {
  //         throw new Error('Failed to store job');
  //       }
  //     })
  //     .then((data) => {
  //       setMessage(data.message);
  //       setJobTitle('');
  //       setJobLocation('');
  //     })
  //     .catch((error) => {
  //       console.error('Error storing job:', error);
  //       setMessage('Failed to store job');
  //     });
  // };

  // Integrated Code
  const [job_Title, setJob_Title] = useState("");
  const [job_Location, setJob_Location] = useState("");
  const [job_Type, setJob_Type] = useState("");
  const [job_PeopleLimit, setJob_PeopleLimit] = useState("");
  const [job_Deadline, setJob_Deadline] = useState("");
  const [job_PayRange, setJob_PayRange] = useState("");
  const [job_PayMin, setJob_PayMin] = useState("");
  const [job_PayMax, setJob_PayMax] = useState("");
  const [job_PayRate, setJob_PayRate] = useState("");
  const [job_Desc, setJob_Desc] = useState("");
  const [job_ResumeStatus, setJob_ResumeStatus] = useState("Optional");
  const [job_DeadlineStatus, setJob_DeadlineStatus] = useState("No");
  const [job_RejectionStatus, setJob_RejectionStatus] = useState("No");

  const handleJobTypeChange = (value) => {
    if (job_Type.includes(value)) {
      // If the value already exists in the array, remove it
      setJob_Type(job_Type.filter((type) => type !== value));
    } else {
      // If the value doesn't exist in the array, add it
      setJob_Type([...job_Type, value]);
    }
  };

  const handlePeopleLimitChange = (e) => {
    setJob_PeopleLimit(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setJob_Deadline(e.target.value);
  };

  const handlePayRangeChange = (e) => {
    setJob_PayRange(e.target.value);
  };

  const handlePayRateChange = (e) => {
    setJob_PayRate(e.target.value);
  };

  const handleDescChange = (e) => {
    setJob_Desc(e.target.value);
  };

  const handleResumeStatusChange = (e) => {
    setJob_ResumeStatus(e.target.value);
  };

  const handleDeadlineStatusChange = (e) => {
    setJob_DeadlineStatus(e.target.value);
  };

  const handleRejectionStatusChange = (e) => {
    setJob_RejectionStatus(e.target.value);
  };

  const storedUserInfo = localStorage.getItem("user-info");
  const userInfo = JSON.parse(storedUserInfo);
  const comp_ID = userInfo.company.comp_ID;

  const formSubmit = (e) => {
    e.preventDefault();

    const formData = {
      job_Title,
      job_Location,
      job_Type,
      job_PeopleLimit,
      job_Deadline,
      job_PayRange,
      job_PayMin,
      job_PayMax,
      job_PayRate,
      job_Desc,
      job_ResumeStatus,
      job_DeadlineStatus,
      job_RejectionStatus,
    };

    fetch("http://localhost:5000/api/StoreJob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, comp_ID }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to store job");
        }
        handle6();
        return response.json();
      })
      .then((data) => {
        console.log(data); // Optional: Handle the response from the API

        // Display success message or redirect the user
      })
      .catch((error) => {
        console.error("Error storing job:", error);
        // Display error message to the user
      });
  };

  return (
    <>
      <Header />
      {show1 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <ProgressBar striped variant="secondary" animated now={15} />
              <br></br>
              <h3 className="text-center">Provide basic information</h3>
              <br></br>
              <label>Job title*</label>
              <input
                type="text"
                value={job_Title}
                onChange={(e) => setJob_Title(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              <label>
                Where would you like to advertise this job?* <br></br>(Enter
                your location)
              </label>
              <input
                type="text"
                value={job_Location}
                onChange={(e) => setJob_Location(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              {fieldsInputError && (
                <p className="text-danger text-center">{fieldsInputError}</p>
              )}
              <Row>
                <div className="col">
                  <button className="formBtn" onClick={handle1}>
                    Save & continue
                  </button>
                </div>
              </Row>
            </div>
          </div>
        </Container>
      )}

      {show2 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <ProgressBar striped variant="secondary" animated now={30} />
              <br></br>
              <h3 className="text-center">Include details</h3>
              <br></br>
              <label>What type of job is it?*</label>
              <div class="form-check form-control formInput p-2 mb-2">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value="Full-time"
                  checked={job_Type.includes("Full-time")}
                  onChange={(e) => handleJobTypeChange(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Full-time
                </label>
              </div>

              <div class="form-check form-control formInput p-2 mb-2">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value="Part-time"
                  checked={job_Type.includes("Part-time")}
                  onChange={(e) => handleJobTypeChange(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Part-time
                </label>
              </div>

              <div class="form-check form-control formInput p-2 mb-2">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value="Contract"
                  checked={job_Type.includes("Contract")}
                  onChange={(e) => handleJobTypeChange(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Contract
                </label>
              </div>

              <div class="form-check form-control formInput p-2 mb-2">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value="Temporary"
                  checked={job_Type.includes("Temporary")}
                  onChange={(e) => handleJobTypeChange(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Temporary
                </label>
              </div>

              <div class="form-check form-control formInput p-2 mb-2">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value="Internship"
                  checked={job_Type.includes("Internship")}
                  onChange={(e) => handleJobTypeChange(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Internship
                </label>
              </div>

              <div class="form-check form-control formInput p-2 mb-2">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value="Commission"
                  checked={job_Type.includes("Commission")}
                  onChange={(e) => handleJobTypeChange(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Commission
                </label>
              </div>

              <div class="form-check form-control formInput p-2 mb-2">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  value="New-Grade"
                  checked={job_Type.includes("New-Grade")}
                  onChange={(e) => handleJobTypeChange(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  New-Grade
                </label>
              </div>
              <br></br>

              <label>
                How many people do you want to hire for this opening?*
              </label>
              <select
                class="form-select form-control formInput"
                aria-label="Default select example"
                value={job_PeopleLimit}
                onChange={handlePeopleLimitChange}
              >
                <option value="none" selected hidden>
                  Select an option
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="10+">10+</option>
              </select>
              <br></br>
              <label>How quickly do you need to hire?*</label>
              <select
                class="form-select form-control formInput"
                aria-label="Default select example"
                value={job_Deadline}
                onChange={handleDeadlineChange}
              >
                <option value="none" selected hidden>
                  Select an option
                </option>
                <option value="1 to 3 days">1 to 3 days</option>
                <option value="3 to 7 days">3 to 7 days</option>
                <option value="1 to 2 weeks">1 to 2 weeks</option>
                <option value="2 to 4 weeks">2 to 4 weeks</option>
                <option value="More than 4 weeks">More than 4 weeks</option>
              </select>
              <br></br>
              <br></br>
              {fieldsInputError && (
                <p className="text-danger text-center">{fieldsInputError}</p>
              )}
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle1}>
                    Back
                  </button>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={handle2}>
                    Save & continue
                  </button>
                </div>
              </Row>
              <br></br>
            </div>
          </div>
        </Container>
      )}

      {show3 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <ProgressBar striped variant="secondary" animated now={45} />
              <br></br>
              <h3 className="text-center">Add compensation</h3>
              <br></br>
              <h4>What is the pay?</h4>
              <label>Show pay by</label>
              <select
                class="form-select form-control formInput"
                aria-label="Default select example"
                value={job_PayRange}
                onChange={handlePayRangeChange}
              >
                <option value="none" selected hidden>
                  Range
                </option>
                <option value="Starting amount">Starting amount</option>
                <option value="Maximum amount">Maximum amount</option>
                <option value="Exact amount">Exact amount</option>
              </select>

              <br></br>

              <Row>
                <div className="col">
                  <label>Minimum</label>
                  <input
                    type="text"
                    value={job_PayMin}
                    onChange={(e) => setJob_PayMin(e.target.value)}
                    class="form-control formInput"
                    placeholder="RS"
                  />
                </div>
                <div className="col">
                  <label>Maximum</label>
                  <input
                    type="text"
                    value={job_PayMax}
                    onChange={(e) => setJob_PayMax(e.target.value)}
                    class="form-control formInput"
                    placeholder="RS"
                  />
                </div>
                <div className="col">
                  <label>Rate</label>
                  <select
                    class="form-select form-control formInput"
                    aria-label="Default select example"
                    value={job_PayRate}
                    onChange={handlePayRateChange}
                  >
                    <option value="none" selected hidden>
                      Rate
                    </option>
                    <option value="Per hour">Per hour</option>
                    <option value="Per day">Per day</option>
                    <option value="Per week">Per week</option>
                    <option value="Per month">Per month</option>
                    <option value="Per year">Per year</option>
                  </select>
                </div>
              </Row>
              <br></br>

              <Alert variant="danger">
                <Alert.Heading>Missing pay information</Alert.Heading>
                <hr />
                <p>
                  If you do not provide pay information, Equipment may choose to
                  display an estimated pay range based on similar jobs in this
                  location. Jobs without employer-provided pay have lower
                  visibility on Equipment and receive fewer quality
                  applications.
                </p>
              </Alert>

              <br></br>
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle2}>
                    Back
                  </button>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={handle3}>
                    Save & continue
                  </button>
                </div>
              </Row>
              <br></br>
            </div>
          </div>
        </Container>
      )}

      {show4 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <ProgressBar striped variant="secondary" animated now={60} />
              <br></br>
              <h3 className="text-center">Job description*</h3>
              <p>
                Describe the responsibilities of this job, required work
                experience, skills, or education.
              </p>
              <button className="formBtn">Upload a PDF or Docx</button>
              <br></br>
              <br></br>

              <textarea
                class="form-control formInput"
                value={job_Desc}
                onChange={handleDescChange}
                rows="9"
              ></textarea>

              <br></br>
              {fieldsInputError && (
                <p className="text-danger text-center">{fieldsInputError}</p>
              )}
              <br></br>
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle3}>
                    {" "}
                    Back
                  </button>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={handle4}>
                    Save & continue
                  </button>
                </div>
              </Row>
              <br></br>
            </div>
          </div>
        </Container>
      )}

      {show5 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <ProgressBar striped variant="secondary" animated now={75} />
              <br></br>
              <h3 className="text-center">Set application preferences</h3>
              <br></br>
              <label>Would you like people to submit a resume?*</label>
              <div class="form-check form-control formInput mb-2 p-2">
                <input
                  class="form-check-input mx-1"
                  value="Yes"
                  checked={job_ResumeStatus === "Yes"}
                  onChange={handleResumeStatusChange}
                  type="radio"
                  name="submitResume"
                  id="submitResume"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes - People will be required to include a resume.
                </label>
              </div>
              <div class="form-check form-control formInput mb-2 p-2">
                <input
                  class="form-check-input mx-1"
                  value="No"
                  checked={job_ResumeStatus === "No"}
                  onChange={handleResumeStatusChange}
                  type="radio"
                  name="submitResume"
                  id="submitResume"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  No - People will not be asked to include a resume.
                </label>
              </div>
              <div class="form-check form-control formInput mb-2 p-2">
                <input
                  class="form-check-input mx-1"
                  value="Optional"
                  checked={job_ResumeStatus === "Optional"}
                  onChange={handleResumeStatusChange}
                  type="radio"
                  name="submitResume"
                  id="submitResume"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Optional - People can choose whether to include a resume.
                </label>
              </div>
              <br></br>

              <label>Is there an application deadline?</label>
              <div class="form-check form-control formInput mb-2 p-2">
                <input
                  type="radio"
                  value="Yes"
                  checked={job_DeadlineStatus === "Yes"}
                  onChange={handleDeadlineStatusChange}
                  class="form-check-input mx-1"
                  name="deadline"
                  id="deadline"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check form-control formInput mb-2 p-2">
                <input
                  class="form-check-input mx-1"
                  type="radio"
                  value="No"
                  checked={job_DeadlineStatus === "No"}
                  onChange={handleDeadlineStatusChange}
                  name="deadline"
                  id="deadline"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  No
                </label>
              </div>
              <br></br>
              <label>
                Do you want to automatically reject candidates who you don't
                interact with within the time you choose?*
              </label>
              <div class="form-check form-control formInput mb-2 p-2">
                <input
                  type="radio"
                  value="Yes"
                  checked={job_RejectionStatus === "Yes"}
                  onChange={handleRejectionStatusChange}
                  class="form-check-input mx-1"
                  name="rejectResume"
                  id="rejectResume"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes, automatically reject candidates on my behalf
                </label>
              </div>
              <div class="form-check form-control formInput mb-2 p-2">
                <input
                  type="radio"
                  value="No"
                  checked={job_RejectionStatus === "No"}
                  onChange={handleRejectionStatusChange}
                  class="form-check-input mx-1"
                  name="rejectResume"
                  id="rejectResume"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  No, don't automatically reject candidates on my behalf
                </label>
              </div>
              <br></br>

              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle4}>
                    {" "}
                    Back
                  </button>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={handle5}>
                    Save & continue
                  </button>
                </div>
              </Row>
              <br></br>
            </div>
          </div>
        </Container>
      )}
      {show6 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <ProgressBar striped variant="secondary" animated now={90} />
              <br></br>
              <h3 className="text-center">Review the job post</h3>
              <br></br>
              <div>
                <div className="formInput p-3 mb-3">
                <Row>
                  <div className="col-9">
                  <h3>Basic Information</h3>
                  <br></br>
                  </div>
                  <div className="col">
                    <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editInfo}>Edit</button>
                  </div>
                </Row>
                
                <p>Job Title: {job_Title}</p>
                <p>Job Location: {job_Location}</p>
                </div>

                <div className="formInput p-3 mb-3">
                <Row>
                  <div className="col-9">
                  <h3>Details</h3>
                  </div>
                  <div className="col">
                  <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editDetails}>Edit</button>
                  </div>
                </Row>
                <br></br>
                <p>Job Type: {job_Type}</p>
                <p>Hiring Limit: {job_PeopleLimit}</p>
                <p>Hiring Deadline: {job_Deadline}</p>
                </div>

                <div className="formInput p-3 mb-3">
                <Row>
                  <div className="col-9">
                  <h3>Compensation</h3>
                  </div>
                  <div className="col">
                  <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editCompensation}>Edit</button>
                  </div>
                </Row>
                <br></br>
                <p>Pay Range: {job_PayRange}</p>
                <p>Minimum Pay: {job_PayMin}</p>
                <p>Maximum Pay: {job_PayMax}</p>
                <p>Pay Rate: {job_PayRate}</p>
                </div>

                <div className="formInput p-3 mb-3">
                <Row>
                  <div className="col-9">
                  <h3>Job Description</h3>
                  </div>
                  <div className="col">
                  <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editJobDesc}>Edit</button>
                  </div>
                </Row>
                <br></br>
                <p>Job Description: {job_Desc}</p>
                </div>

                <div className="formInput p-3 mb-3">
                <Row>
                  <div className="col-9">
                  <h3>Application Preferences</h3>
                  </div>
                  <div className="col">
                  <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={handle5}>Edit</button>
                  </div>
                </Row>
                <br></br>
                <p>Submit Resume: {job_ResumeStatus}</p>
                <p>Is there application deadline: {job_DeadlineStatus}</p>
                <p>Automatically Reject Resume {job_RejectionStatus}</p>
              </div>
              </div>

              <div className="formInput p-3 mb-2">
              <p>
                By pressing confirm, you agree that this job will be posted and
                applications will be processed in accordance with Equipment's
                Cookie Policy, Privacy Policy and Terms of Service. You consent
                to Indeed informing a user that you have opened, viewed or made
                a decision regarding the user’s application.
              </p>
              </div>
              <br></br>

              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle5}>
                    {" "}
                    Back
                  </button>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Confirm
                  </button>
                </div>
              </Row>
              <br></br>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default PostJob;
