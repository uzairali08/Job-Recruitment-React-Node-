import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Form } from "react-bootstrap";
import Header from "../header";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateProfile() {
  const navigate = useNavigate();

  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("userId");

  function jobFeed() {
    navigate("/JobFeed");
  }

  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);

  const handle1 = () => {
    setShow1(!show1);
    setShow2(!show2);
  };
  const handle2 = () => {
    setShow2(!show2);
    setShow3(!show3);
  };
  const handle3 = () => {
    setShow3(!show3);
    setShow4(!show4);
  };
  const handle4 = () => {
    setShow4(!show4);
    setShow5(!show5);
  };
  const handle5 = () => {
    setShow5(!show5);
    setShow6(!show6);
  };
  const handle6 = () => {
    setShow6(!show6);
    setShow7(!show7);
  };
  const handle7 = () => {
    setShow7(!show7);
    setShow8(!show8);
  };
  const handle8 = () => {
    setShow8(!show8);
    setShow9(!show9);
  };
  const handle9 = () => {
    setShow9(!show9);
    setShow10(!show10);
  };
  const handle10 = () => {
    setShow10(!show10);
    jobFeed();
  };

  const editSkills = () => {
    setShow8(!show8);
    setShow6(!show6);
  };

  const editWorkExp = () => {
    setShow8(!show8);
    setShow5(!show5);
  };

  const editEdu = () => {
    setShow8(!show8);
    setShow4(!show4);
  };

  const editLoc = () => {
    setShow8(!show8);
    setShow3(!show3);
  };

  const editContact = () => {
    setShow8(!show8);
    setShow2(!show2);
  };

  const editName = () => {
    setShow8(!show8);
    setShow1(!show1);
  };

  const [user_Fname, setUser_Fname] = useState("");
  const [user_Lname, setUser_Lname] = useState("");
  const [user_PhoneNo, setUser_PhoneNo] = useState("");
  const [user_Country, setUser_Country] = useState("");
  const [user_StAddress, setUser_StAddress] = useState("");
  const [user_City, setUser_City] = useState("");
  const [user_PostalCode, setUser_PostalCode] = useState("");
  const [user_EduLevel, setUser_EduLevel] = useState("");
  const [user_FieldOfStudy, setUser_FieldOfStudy] = useState("");
  const [user_SchoolName, setUser_SchoolName] = useState("");
  const [user_EduStatus, setUser_EduStatus] = useState("");
  const [user_EduFrom, setUser_EduFrom] = useState("");
  const [user_EduTo, setUser_EduTo] = useState("");
  const [user_JobTitle, setUser_JobTitle] = useState("");
  const [user_Company, setUser_Company] = useState("");
  const [user_JobStatus, setUser_JobStatus] = useState("");
  const [user_JobFrom, setUser_JobFrom] = useState("");
  const [user_JobTo, setUser_JobTo] = useState("");
  const [user_JobDesc, setUser_JobDesc] = useState("");
  const [user_Skills, setUser_Skills] = useState("");
  const [user_Certifications, setUser_Certifications] = useState("");
  const [user_ResumeStatus, setUser_ResumeStatus] = useState("");
  const [user_BasePay, setUser_BasePay] = useState("");
  const [user_PayPeriod, setUser_PayPeriod] = useState("");
  const [user_DesiredJob, setUser_DesiredJob] = useState("");
  const [user_Relocation, setUser_Relocation] = useState("");
  const [user_DesiredJobType, setUser_DesiredJobType] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await fetch(
            `http://localhost:5000/api/EditUser/${userId}`
          );
          const user = await response.json();
          setUser_Fname(user.user_Fname);
          setUser_Lname(user.user_Lname);
          setUser_PhoneNo(user.user_PhoneNo);
          setUser_Country(user.user_Country);
          setUser_StAddress(user.user_StAddress);
          setUser_City(user.user_City);
          setUser_PostalCode(user.user_PostalCode);
          setUser_EduLevel(user.user_EduLevel);
          setUser_FieldOfStudy(user.user_FieldOfStudy);
          setUser_SchoolName(user.user_SchoolName);
          setUser_EduStatus(user.user_EduStatus);
          setUser_EduFrom(user.user_EduFrom);
          setUser_EduTo(user.user_EduTo);
          setUser_JobTitle(user.user_JobTitle);
          setUser_Company(user.user_Company);
          setUser_JobStatus(user.user_JobStatus);
          setUser_JobFrom(user.user_JobFrom);
          setUser_JobTo(user.user_JobTo);
          setUser_JobDesc(user.user_JobDesc);
          setUser_Skills(user.user_Skills);
          setUser_Certifications(user.user_Certifications);
          setUser_ResumeStatus(user.user_ResumeStatus);
          setUser_BasePay(user.user_BasePay);
          setUser_PayPeriod(user.user_PayPeriod);
          setUser_DesiredJob(user.user_DesiredJob);
          setUser_Relocation(user.user_Relocation);
          setUser_DesiredJobType(user.user_DesiredJobType);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };

    fetchUserData();
  }, [userId]);

  const formSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user_Fname,
      user_Lname,
      user_PhoneNo,
      user_Country,
      user_StAddress,
      user_City,
      user_PostalCode,
      user_EduLevel,
      user_FieldOfStudy,
      user_SchoolName,
      user_EduStatus,
      user_EduFrom,
      user_EduTo,
      user_JobTitle,
      user_Company,
      user_JobStatus,
      user_JobFrom,
      user_JobTo,
      user_JobDesc,
      user_Skills,
      user_Certifications,
      user_ResumeStatus,
      user_BasePay,
      user_PayPeriod,
      user_DesiredJob,
      user_Relocation,
      user_DesiredJobType,
    };

    fetch(`http://localhost:5000/api/UpdateUser/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, user_ID }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        jobFeed();
        return response.json();
      })
      .then((data) => {
        console.log(data); // Optional: Handle the response from the API

        // Display success message or redirect the user
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        // Display error message to the user
      });
  };

  const handleUserCountry = (e) => {
    setUser_Country(e.target.value);
  };

  const handleEduStatus = (value) => {
    setUser_EduStatus(value);
  };

  const handleJobStatus = (value) => {
    setUser_JobStatus(value);
  };

  const handleResumeStatusChange = (e) => {
    setUser_ResumeStatus(e.target.value);
  };

  const handlPayPeriod = (e) => {
    setUser_PayPeriod(e.target.value);
  };

  const handleRelocation = (value) => {
    setUser_Relocation(value);
  };

  const handleDesireJob = (value) => {
    setUser_DesiredJobType(value);
  };

  //Old Code
  const storedUserInfo = localStorage.getItem("user-info");
  const userInfo = JSON.parse(storedUserInfo);
  const user_ID = userInfo.user.user_ID;

  return (
    <>
      <Header />

      {show1 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={jobFeed}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={10} />
              <br></br>
              <h3 className="text-center">What is your name?</h3>
              <br></br>
              <label>First Name *</label>
              <input
                type="text"
                value={user_Fname}
                onChange={(e) => setUser_Fname(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              <label>Last Name *</label>
              <input
                type="text"
                value={user_Lname}
                onChange={(e) => setUser_Lname(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              <button className="formBtn mb-3" onClick={handle1}>
                Continue
              </button>
            </div>
          </div>
        </Container>
      )}

      {show2 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle1}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={20} />
              <br></br>
              <h3 className="text-center">
                Would you like to add a phone number to your resume?
              </h3>
              <br></br>
              <h4>Phone number</h4>
              <label>Only provided to employers you apply or respond to</label>
              <input
                type="number"
                value={user_PhoneNo}
                onChange={(e) => setUser_PhoneNo(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              <span>
                <form>
                  <input type="checkbox" /> Show my number on Equipment
                </form>
              </span>
              <br></br>
              <p>
                By submitting the form with this box checked, you confirm that
                you are the primary user and subscriber to the telephone number
                provided, and you agree to receive calls (including using
                artificial or pre-recorded voice), texts, and WhatsApp messages
                from Indeed and employers who use Indeed at the telephone number
                provided above.
              </p>
              <button className="formBtn mb-3" onClick={handle2}>
                Continue
              </button>
            </div>
          </div>
        </Container>
      )}

      {show3 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle2}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={30} />
              <br></br>
              <h3 className="text-center">Where are you located?</h3>

              <h4>This helps match you with nearby jobs</h4>
              <br></br>
              <label>Country</label>
              <select
                class="form-select form-control formInput"
                aria-label="Default select example"
                value={user_Country}
                onChange={handleUserCountry}
              >
                <option value="none" selected hidden>
                  Choose Country
                </option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
                <option value="India">India</option>
              </select>

              <br></br>
              <label>Street Address</label>
              <input
                type="text"
                value={user_StAddress}
                onChange={(e) => setUser_StAddress(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              <label>City, State*</label>
              <input
                type="text"
                value={user_City}
                onChange={(e) => setUser_City(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>

              <label>Postal Code</label>
              <input
                type="text"
                value={user_PostalCode}
                onChange={(e) => setUser_PostalCode(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              <button className="formBtn mb-3" onClick={handle3}>
                Continue
              </button>
            </div>
          </div>
        </Container>
      )}

      {show4 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle3}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={40} />
              <br></br>
              <h3 className="text-center">Add Education</h3>
              <br></br>
              <label>Level of Education *</label>
              <input
                type="text"
                value={user_EduLevel}
                onChange={(e) => setUser_EduLevel(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              <label>Field of Study</label>
              <input
                type="text"
                value={user_FieldOfStudy}
                onChange={(e) => setUser_FieldOfStudy(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>

              <label>School Name</label>
              <input
                type="text"
                value={user_SchoolName}
                onChange={(e) => setUser_SchoolName(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>

              <label>Time Period</label>
              {/* <span className="form-control formInput"> */}
              <form>
                <span className="form-control formInput mb-2">
                  <input
                    type="radio"
                    value="Currently Enrolled"
                    checked={user_EduStatus === "Currently Enrolled"}
                    onChange={(e) => handleEduStatus(e.target.value)}
                    id="user_EduStatusEnrolled"
                  />
                  <label htmlFor="user_EduStatusEnrolled">
                    Currently enrolled
                  </label>
                </span>
                <span className="form-control formInput">
                  <input
                    type="radio"
                    value="Graduated"
                    checked={user_EduStatus === "Graduated"}
                    onChange={(e) => handleEduStatus(e.target.value)}
                    id="user_EduStatusGraduated"
                  />
                  <label htmlFor="user_EduStatusGraduated">Graduated</label>
                </span>
              </form>
              {/* </span> */}
              <br></br>

              <label>From</label>
              <input
                type="date"
                value={user_EduFrom || ""}
                onChange={(e) => setUser_EduFrom(e.target.value)}
                className="form-control formInput"
                required
              />

              <br></br>

              <label>To</label>
              <input
                type="date"
                value={user_EduTo}
                onChange={(e) => setUser_EduTo(e.target.value)}
                class="form-control formInput"
                disabled={user_EduStatus === "Graduated"}
                required
              />

              <br></br>
              <br></br>
              <div className="text-center">
                <button className="formBtnProfile mx-2" onClick={handle4}>
                  Save
                </button>
                <button className="formBtnProfile mx-2" onClick={handle4}>
                  Skip
                </button>
              </div>
              <br></br>
            </div>
          </div>
        </Container>
      )}

      {show5 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle4}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={50} />
              <br></br>
              <h3 className="text-center">Add Work Experience</h3>
              <br></br>
              <label>Job Title *</label>
              <input
                type="text"
                value={user_JobTitle}
                onChange={(e) => setUser_JobTitle(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>
              <label>Company</label>
              <input
                type="text"
                value={user_Company}
                onChange={(e) => setUser_Company(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>

              <label>Time Period</label>
              <form>
                <span className="form-control formInput mb-2">
                  <input
                    type="radio"
                    value="Currently Working"
                    checked={user_JobStatus === "Currently Working"}
                    onChange={(e) => handleJobStatus(e.target.value)}
                    id="user_JobStatusWorking"
                  />
                  <label htmlFor="user_JobStatusWorking">
                    Currently Working
                  </label>
                </span>
                <span className="form-control formInput">
                  <input
                    type="radio"
                    value="Not Working"
                    checked={user_JobStatus === "Not Working"}
                    onChange={(e) => handleJobStatus(e.target.value)}
                    id="user_JobStatusNotWorking"
                  />
                  <label htmlFor="user_JobStatusNotWorking">Not Working</label>
                </span>
              </form>
              {/* <span className="form-control formInput">
                <form>
                  <input
                    type="checkbox"
                    value="Currently Working"
                    checked={user_JobStatus.includes("Currently Working")}
                    onChange={(e) => handleJobStatus(e.target.value)}
                    id="user_JobStatus"
                  />
                  Currently Working
                </form>
              </span> */}
              <br></br>

              <label>From</label>
              <input
                type="date"
                value={user_JobFrom}
                onChange={(e) => setUser_JobFrom(e.target.value)}
                class="form-control formInput"
                required
              />

              <br></br>

              <label>To</label>
              <input
                type="date"
                value={user_JobTo}
                onChange={(e) => setUser_JobTo(e.target.value)}
                class="form-control formInput"
                disabled={user_JobStatus == "Currently Working"}
                required
              />

              <br></br>

              <label>Description</label>
              <textarea
                value={user_JobDesc}
                onChange={(e) => setUser_JobDesc(e.target.value)}
                class="form-control formInput"
                required
                rows="5"
              ></textarea>
              <br></br>
              <br></br>

              <div className="text-center">
                <button className="formBtnProfile mx-2" onClick={handle5}>
                  Save
                </button>
                <button className="formBtnProfile mx-2" onClick={handle5}>
                  Skip
                </button>
              </div>
              <br></br>
            </div>
          </div>
        </Container>
      )}
      {show6 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle5}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={jobFeed}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={60} />
              <br></br>
              <h3 className="text-center">What are some of your skills?</h3>
              <br></br>
              <label>We recommend adding at least 6 skills</label>

              <Form className="d-flex">
                <Form.Control
                  placeholder="Add a Skill"
                  className="me-2 formInput"
                  value={user_Skills}
                  onChange={(e) => setUser_Skills(e.target.value)}
                />
                <Button className="formBtn w-25">Add</Button>
              </Form>

              <br></br>
              <br></br>

              <button className="formBtn mb-3" onClick={handle6}>
                Continue
              </button>
            </div>
          </div>
        </Container>
      )}

      {show7 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle6}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={70} />
              <br></br>
              <h3 className="text-center">
                What certifications or licenses do you have?
              </h3>
              <br></br>

              <Form className="d-flex">
                <Form.Control
                  placeholder="Add a certificate or license"
                  className="me-2 form-control formInput"
                  value={user_Certifications}
                  onChange={(e) => setUser_Certifications(e.target.value)}
                />
                <Button className="formBtn w-25">Add</Button>
              </Form>

              <br></br>
              <br></br>

              <button className="formBtn mb-3" onClick={handle7}>
                Continue
              </button>
            </div>
          </div>
        </Container>
      )}

      {show8 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle7}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={80} />
              <br></br>
              <h3 className="text-center">Is your resume ready?</h3>
              <br></br>
              <label>Review and make any changes below</label>
              <br></br>
              <br></br>
              <div>
                <div className="formInput p-3 mb-3">
                  <Row>
                    <div className="col-9">
                      <h3>Your Name</h3>
                      <br></br>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
                        onClick={editName}
                      >
                        Edit
                      </button>
                    </div>
                  </Row>

                  <p>First Name: {user_Fname}</p>
                  <p>Last Name: {user_Lname}</p>
                </div>

                <div className="formInput p-3 mb-3">
                  <Row>
                    <div className="col-9">
                      <h3>Your Contact No</h3>
                      <br></br>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
                        onClick={editContact}
                      >
                        Edit
                      </button>
                    </div>
                  </Row>

                  <p>Phone Number: {user_PhoneNo}</p>
                </div>

                <div className="formInput p-3 mb-3">
                  <Row>
                    <div className="col-9">
                      <h3>Your Location</h3>
                      <br></br>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
                        onClick={editLoc}
                      >
                        Edit
                      </button>
                    </div>
                  </Row>

                  <p>Country: {user_Country}</p>
                  <p>Street Address: {user_StAddress}</p>
                  <p>City, State: {user_City}</p>
                  <p>Postal Code: {user_PostalCode}</p>
                </div>

                <div className="formInput p-3 mb-3">
                  <Row>
                    <div className="col-9">
                      <h3>Your Education</h3>
                      <br></br>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
                        onClick={editEdu}
                      >
                        Edit
                      </button>
                    </div>
                  </Row>

                  <p>Level of Education: {user_EduLevel}</p>
                  <p>Field of study: {user_FieldOfStudy}</p>
                  <p>School Name: {user_SchoolName}</p>
                  <p>Currently Enrolled: {user_EduStatus}</p>
                  <p>Education From: {user_EduFrom}</p>
                  <p>Education To: {user_EduTo}</p>
                </div>

                <div className="formInput p-3 mb-3">
                  <Row>
                    <div className="col-9">
                      <h3>Your Work Experience</h3>
                      <br></br>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
                        onClick={editWorkExp}
                      >
                        Edit
                      </button>
                    </div>
                  </Row>

                  <p>Job Title: {user_JobTitle}</p>
                  <p>Company: {user_Company}</p>
                  <p>Currently Working: {user_JobStatus}</p>
                  <p>Job From: {user_JobFrom}</p>
                  <p>Job To: {user_JobTo}</p>
                  <p>Job Description: {user_JobDesc}</p>
                </div>

                <div className="formInput p-3 mb-3">
                  <Row>
                    <div className="col-9">
                      <h3>Your Skills</h3>
                      <br></br>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
                        onClick={editSkills}
                      >
                        Edit
                      </button>
                    </div>
                  </Row>

                  <p>Skills: {user_Skills}</p>
                </div>

                <div className="formInput p-3 mb-3">
                  <Row>
                    <div className="col-9">
                      <h3>Your Certifications</h3>
                      <br></br>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
                        onClick={handle7}
                      >
                        Edit
                      </button>
                    </div>
                  </Row>

                  <p>Certifications: {user_Certifications}</p>
                </div>
              </div>
              <br></br>

              <button className="formBtn mb-3" onClick={handle8}>
                Continue
              </button>
            </div>
          </div>
        </Container>
      )}

      {show9 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle8}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={90} />
              <br></br>
              <h3 className="text-center">
                Make your resume public so employers can find you
              </h3>
              <br></br>

              <div class="form-check form-control formInput mb-2">
                <input
                  class="form-check-input mx-2"
                  value="Public"
                  checked={user_ResumeStatus === "Public"}
                  onChange={handleResumeStatusChange}
                  type="radio"
                  name="submitResume"
                  id="submitResume"
                />
                <h4>Public</h4>
                <label class="form-check-label" for="flexRadioDefault1">
                  Your resume and profile information can be found on Equipment
                  by employers looking for qualified candidates, according to
                  our terms.
                </label>
              </div>
              <div class="form-check form-control formInput mb-2">
                <input
                  class="form-check-input mx-2"
                  value="Private"
                  checked={user_ResumeStatus === "Private"}
                  onChange={handleResumeStatusChange}
                  type="radio"
                  name="submitResume"
                  id="submitResume"
                />
                <h4>Private</h4>
                <label class="form-check-label" for="flexRadioDefault2">
                  Employers cannot find your resume in search on Equipment. This
                  does not affect previous applications or prevent your
                  responded to from contacting you.
                </label>
              </div>
              <br></br>
              <br></br>

              <button className="formBtn mb-3" onClick={handle9}>
                Continue
              </button>
            </div>
          </div>
        </Container>
      )}

      {show10 && (
        <Container>
          <div className="pt-5 pb-5">
            <div className="formContainer col-lg-6 offset-lg-3 p-4">
              <Row>
                <div className="col-4">
                  <button className="formBtn" onClick={handle9}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="formBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={95} />
              <br></br>
              <h3 className="text-center">
                What kind of job are you looking for?
              </h3>
              <label>
                Employers searching for candidates may see your job preferences
                when your resume is set to public.
              </label>
              <br></br>
              <br></br>
              <h4>Desired minimum base pay</h4>
              <p className="bg-secondary text-white p-1">
                Employers can't see pay information
              </p>

              <Row>
                <div className="col">
                  <label>Minimum base pay</label>
                  <input
                    type="number"
                    value={user_BasePay}
                    onChange={(e) => setUser_BasePay(e.target.value)}
                    class="form-control formInput"
                    required
                    placeholder="RS"
                  />
                </div>
                <div className="col">
                  <label>Pay period</label>
                  <select
                    class="form-select form-control formInput"
                    aria-label="Default select example"
                    value={user_PayPeriod}
                    onChange={handlPayPeriod}
                  >
                    <option value="none" selected hidden>
                      Select pay period
                    </option>
                    <option value="Per hour">Per hour</option>
                    <option value="Per day">Per day</option>
                    <option value="Per week">Per week</option>
                    <option value="Per month">Per month</option>
                  </select>
                </div>
              </Row>
              <br></br>

              <label>Desired job title</label>
              <input
                type="text"
                value={user_DesiredJob}
                onChange={(e) => setUser_DesiredJob(e.target.value)}
                class="form-control formInput"
                required
              />
              <br></br>

              <label>Relocation</label>
              <form>
                <span className="form-control formInput mb-2">
                  <input
                    type="radio"
                    value="Yes"
                    checked={user_Relocation === "Yes"}
                    onChange={(e) => handleRelocation(e.target.value)}
                    id="user_RelocationYes"
                  />
                  <label htmlFor="user_RelocationYes">
                    Yes
                  </label>
                </span>
                <span className="form-control formInput">
                  <input
                    type="radio"
                    value="No"
                    checked={user_Relocation === "No"}
                    onChange={(e) => handleRelocation(e.target.value)}
                    id="user_RelocationNo"
                  />
                  <label htmlFor="user_RelocationNo">No</label>
                </span>
              </form>
              {/* <div class="form-check form-control formInput">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Yes"
                  checked={user_Relocation.includes("Yes")}
                  onChange={(e) => handleRelocation(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  I am willing to relocate
                </label>
              </div> */}
              <br></br>

              <label>Desired job type</label>
              <div class="form-check form-control formInput mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Full-time"
                  checked={user_DesiredJobType.includes("Full-time")}
                  onChange={(e) => handleDesireJob(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Full-time
                </label>
              </div>

              <div class="form-check form-control formInput mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Part-time"
                  checked={user_DesiredJobType.includes("Part-time")}
                  onChange={(e) => handleDesireJob(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Part-time
                </label>
              </div>

              <div class="form-check form-control formInput mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Contract"
                  checked={user_DesiredJobType.includes("Contract")}
                  onChange={(e) => handleDesireJob(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Contract
                </label>
              </div>

              <div class="form-check form-control formInput mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Temporary"
                  checked={user_DesiredJobType.includes("Temporary")}
                  onChange={(e) => handleDesireJob(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Temporary
                </label>
              </div>

              <div class="form-check form-control formInput mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Internship"
                  checked={user_DesiredJobType.includes("Internship")}
                  onChange={(e) => handleDesireJob(e.target.value)}
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Internship
                </label>
              </div>
              <br></br>
              <button className="formBtn mb-3" onClick={formSubmit}>
                Finish
              </button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default UpdateProfile;
