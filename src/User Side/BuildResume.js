import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Form } from "react-bootstrap";
import Header from "../header";
import "../App.css";
import "../Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuildResume() {
  const navigate = useNavigate();
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
    // setShow9(!show9);
    jobFeed();
  };

  //New Code
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

    fetch("http://localhost:5000/api/StoreUserResume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, user_ID }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to store job");
        }
        jobFeed();
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

  const handleUserCountry = (e) => {
    setUser_Country(e.target.value);
  };

  const handleEduStatus = (value) => {
    setUser_EduStatus(value);
  };

  const handleJobStatus = (value) => {
    if (user_JobStatus.includes(value)) {
      // If the value already exists in the array, remove it
      setUser_JobStatus(user_JobStatus.filter((type) => type !== value));
    } else {
      // If the value doesn't exist in the array, add it
      setUser_JobStatus([...user_JobStatus, value]);
    }
  }

  const handleResumeStatusChange = (e) => {
    setUser_ResumeStatus(e.target.value);
  };

  const handlPayPeriod = (e) => {
    setUser_PayPeriod(e.target.value);
  }

  const handleRelocation = (value) => {
    setUser_Relocation(value);
  }

  const handleDesireJob = (value) => {
    setUser_DesiredJobType(value);
  }

  //Old Code
  const storedUserInfo = localStorage.getItem("user-info");
  const userInfo = "daniyal";
  const user_ID = 2;

  const editSkills = () => {
    setShow8(!show8);
    setShow6(!show6);
  }

  const editWorkExp = () => {
    setShow8(!show8);
    setShow5(!show5);
  }

  const editEdu = () => {
    setShow8(!show8);
    setShow4(!show4);
  }

  const editLoc = () => {
    setShow8(!show8);
    setShow3(!show3);
  }

  const editContact = () => {
    setShow8(!show8);
    setShow2(!show2);
  }

  const editName = () => {
    setShow8(!show8);
    setShow1(!show1);
  }
  
  return (
    <>
      <Header />
      {show1 && (
        <Container>
        <div class="container Card col-lg-4 pt-2  ">
            <div className="">
              <Row>
                <div className="col-4">
                  <button className="LoginBtn" onClick={jobFeed}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-5">
                  <button  className="LoginBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={10} />
              <br></br>
              <h3 className="text-center loginHeading">What is your name?</h3>
              <br></br>
              <label className="labelColor">First Name *</label>
              <input
              type="text"
              value={user_Fname}
              onChange={(e) => setUser_Fname(e.target.value)}
              className="form-control loginInput"
              required
              />
             
              <label className="labelColor">Last Name *</label>
              <input
                type="text"
                value={user_Lname}
                onChange={(e) => setUser_Lname(e.target.value)}
                className="form-control loginInput"
                required
              />
             
              <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn">
                Save
              </button>
            </p>
            <button className="commonBtn" onClick={handle1}>
                Continue
              </button>
          </div>


            
            </div>
          </div>
        </Container>
      )}

      {show2 && (
        <Container>
        <div class="container Card col-lg-6 pt-2  ">
            <div className="">
              <Row>
                <div className="col-4">
                  <button className="LoginBtn" onClick={handle1}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="LoginBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={20} />
              <br></br>
              <h3 className="text-center loginHeading">
                Would you like to add a phone number to your resume?
              </h3>
              <br></br>
             
              <label  className="labelColor">Phone number</label>
              <input
                type="number"
                value={user_PhoneNo}
                onChange={(e) => setUser_PhoneNo(e.target.value)}
                class="form-control loginInput"
                required

              />
              <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn">
                Save
              </button>
            </p>
            <button className="commonBtn" onClick={handle2}>
                Continue
              </button>
          </div>
            </div>
          </div>
        </Container>
      )}

      {show3 && (
        <Container>
          <div class="container Card col-lg-5 pt-2  ">
            <div className="">
              <Row>
                <div className="col-4">
                  <button className="LoginBtn" onClick={handle2}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="LoginBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={30} />
              <br></br>
              <h3 className="text-center loginHeading">Where are you located?</h3>

             
              <label className="labelColor">Country</label>
              <select
                class="form-select form-control loginInput"
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

              
              <label className="labelColor">Street Address</label>
              <input
                type="text"
                value={user_StAddress}
                onChange={(e) => setUser_StAddress(e.target.value)}
                class="form-control loginInput"
                required
              />
            
              <label className="labelColor">City, State*</label>
              <input
                type="text"
                value={user_City}
                onChange={(e) => setUser_City(e.target.value)}
                class="form-control loginInput"
                required
              />
             

              <label className="labelColor">Postal Code</label>
              <input
                type="text"
                value={user_PostalCode}
                onChange={(e) => setUser_PostalCode(e.target.value)}
                class="form-control loginInput"
                required
              />
               <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn">
                Save
              </button>
            </p>
            <button className="commonBtn" onClick={handle3}>
                Continue
              </button>
          </div>
            </div>
          </div>
        </Container>
      )}

      {show4 && (
        <Container>
        <div class="container Card col-lg-5 pt-2  ">
            <div className="">
            <Row>
                <div className="col-4">
                  <button className="LoginBtn" onClick={handle3}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="LoginBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={40} />
              <br></br>
              <h3 className="text-center loginHeading">Add Education</h3>
              
              <label className="labelColor">Level of Education *</label>
              <input
                type="text"
                value={user_EduLevel}
                onChange={(e) => setUser_EduLevel(e.target.value)}
                class="form-control loginInput"
                required
              />
              
              <label className="labelColor">Field of Study</label>
              <input
                type="text"
                value={user_FieldOfStudy}
                onChange={(e) => setUser_FieldOfStudy(e.target.value)}
                class="form-control loginInput"
                required
              />
              

              <label className="labelColor">School Name</label>
              <input
                type="text"
                value={user_SchoolName}
                onChange={(e) => setUser_SchoolName(e.target.value)}
                class="form-control loginInput"
                required
              />
              <br></br>

              <label className="labelColor">Time Period</label>
              <input
                    type="text"
                    value="Currently Enrolled"
                    onChange={(e) => handleEduStatus(e.target.value)}
                    id="user_EduStatusEnrolled"
                    className="loginInput"
                  />

              <label className="labelColor">From</label>
              <input
                type="date"
                value={user_EduFrom}
                onChange={(e) => setUser_EduFrom(e.target.value)}
                class="form-control loginInput"
                disabled={user_EduStatus === "Graduated"}
                required
              />
              <br></br>

              <label className="labelColor">To</label>
              <input
                type="date"
                value={user_EduTo}
                onChange={(e) => setUser_EduTo(e.target.value)}
                class="form-control loginInput"
                required
              />
             
             <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn" onClick={handle4}>
                Save
              </button>
            </p>
            <button className="commonBtn" onClick={handle4}>
                Skip
              </button>
          </div>


             
            </div>
          </div>
        </Container>
      )}

      {show5 && (
        <Container>
        <div class="container Card col-lg-5 pt-2  ">
            <div className="">
              <Row>
                <div className="col-4">
                  <button className="LoginBtn" onClick={handle4}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="LoginBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={50} />
              <br></br>
              <h3 className="text-center loginHeading">Add Work Experience</h3>
     
              <label className="labelColor">Job Title *</label>
              <input
                type="text"
                value={user_JobTitle}
                onChange={(e) => setUser_JobTitle(e.target.value)}
                class="form-control loginInput"
                required
              />
             
              <label className="labelColor">Company</label>
              <input
                type="text"
                value={user_Company}
                onChange={(e) => setUser_Company(e.target.value)}
                class="form-control loginInput"
                required
              />
            
              <label className="labelColor">Time Period</label>
              <input
                    type="text"
                    className="loginInput"
                    value="Currently Working"
                    onChange={(e) => handleJobStatus(e.target.value)}
                    id="user_JobStatusWorking"
                  />

              <label className="labelColor">From</label>
              <input
                type="date"
                value={user_JobFrom}
                onChange={(e) => setUser_JobFrom(e.target.value)}
                className="form-control loginInput"
                required
              />
             

              <label className="labelColor">To</label>
              <input
              type="date"
              value={user_JobTo}
              onChange={(e) => setUser_JobTo(e.target.value)}
              class="form-control loginInput"
              disabled={user_JobStatus == "Currently Working"}
              required
              />
              

              <label className="labelColor">Description</label>
              <textarea
              value={user_JobDesc}
              onChange={(e) => setUser_JobDesc(e.target.value)}
              class="form-control loginInput"
              required
                rows="5"
              ></textarea>
              

              <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn" onClick={handle5}>
                Save
              </button>
            </p>
            <button className="commonBtn" onClick={handle5}>
                Skip
              </button>
          </div>
       
            </div>
          </div>
        </Container>
      )}
      {show6 && (
        <Container>
        <div class="container Card col-lg-5 pt-2  ">
            <div className="">
              <Row>
                <div className="col-4">
                  <button className="LoginBtn" onClick={handle5}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="LoginBtn" onClick={jobFeed}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={60} />
              <br></br>
              <h3 className="text-center loginHeading">What are some of your skills?</h3>

              <label className="labelColor">Add at least 6 skills</label>
              
              
              <Form className="d-flex">
                <Form.Control
                  placeholder="Add a Skill"
                  className="me-2 loginInput"
                  value={user_Skills}
                  onChange={(e) => setUser_Skills(e.target.value)}
                />
              </Form>

              

              <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn" onClick={handle6}>
                Save
              </button>
            </p>
            <button className="commonBtn" onClick={handle6}>
                Skip
              </button>
          </div>
            </div>
          </div>
        </Container>
      )}

      {show7 && (
        <Container>
        <div class="container Card col-lg-5 pt-2  ">
            <div className="">
              <Row>
                <div className="col-4">
                  <button className="LoginBtn" onClick={handle6}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="LoginBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={70} />
              <br></br>
              <h3 className="text-center loginHeading">
                What certifications or licenses do you have?
              </h3>
              
             <form>             
              <label className="labelColor">Add Certification or Lincencs *</label>

                <input
                type="file"
                  placeholder="Add a certificate or license"
                  className="me-2 form-control "
                  value={user_Certifications}
                  onChange={(e) => setUser_Certifications(e.target.value)}
                />
              </form>




              <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn" onClick={handle7}>
                Save
              </button>
            </p>
            <button className="commonBtn" onClick={handle7}>
                Skip
              </button>
          </div>
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
                      <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editName}>
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
                      <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editContact}>
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
                      <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editLoc}>
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
                      <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editEdu}>
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
                      <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editWorkExp}>
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
                      <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={editSkills}>
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
                      <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2" onClick={handle7}>
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
        <div class="container Card col-lg-5 pt-2  ">
            <div className="">
              <Row>
                <div className="col-4">
                  <button className="LoginBtn" onClick={handle8}>
                    Back
                  </button>
                </div>
                <div className="col"></div>
                <div className="col-4">
                  <button className="LoginBtn" onClick={formSubmit}>
                    Save & Exit
                  </button>
                </div>
              </Row>
              <br></br>
              <ProgressBar striped variant="secondary" animated now={90} />
              <br></br>
              <h3 className="text-center loginHeading">
                Make your resume public so employers can find you
              </h3>
             
              <label className="labelColor">Select one</label>
              <select
                class="form-select form-control loginInput"
                aria-label="Default select example"
                value={user_ResumeStatus}
                onChange={handleResumeStatusChange}
              >
               
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>

            



              
             

              <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn" onClick={handle9}>
                Save
              </button>
            </p>
            <button className="commonBtn" onClick={handle9}>
                Continue
              </button>
          </div>
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

export default BuildResume;
