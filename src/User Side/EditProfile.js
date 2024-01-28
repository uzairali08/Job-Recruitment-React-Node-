import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header";
import Messagebox from "../Chat box/Messagebox";
import "./UserSide.css";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer";

function EditProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("userId");

  function editProfile(userId) {
    navigate(`/UpdateProfile?userId=${userId}`);
  }

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/EditUser/${userId}`
        ); // Replace {userId} with the actual user ID
        if (!response.ok) {
          throw new Error("Failed to fetch user details.");
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return (<div className="loader-container">
    <div className="loader-spinner"></div>
  </div>);
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="editProfilePage">
      <Header />
      <Messagebox />
      <div className="container col-lg-5 pt-5 pb-5">
        <h1 className="editProfileHeader">Personal Information</h1>
        <Row className="pt-5">
          <h1 className="editProfileRowHeader pb-2">Name</h1>
          <div className="col">
            <label className="editProfileLabel">First Name</label>
            <br></br>
            <input
              className="editProdileInput"
              value={user.user_Fname}
              disabled
            />
          </div>
          <div className="col">
            <label className="editProfileLabel">Last Name</label>
            <br></br>
            <input
              className="editProdileInput"
              value={user.user_Lname}
              disabled
            />
          </div>
        </Row>

        <Row className="pt-5">
          <h1 className="editProfileRowHeader pb-2">Location</h1>
          <div className="row pb-2">
            <div className="col">
              <label className="editProfileLabel">Country</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_Country}
                disabled
              />
            </div>
            <div className="col">
              <label className="editProfileLabel">City</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_City}
                disabled
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="editProfileLabel">Address</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_StAddress}
                disabled
              />
            </div>
            <div className="col">
              <label className="editProfileLabel">Postal Code</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_PostalCode}
                disabled
              />
            </div>
          </div>
        </Row>

        <Row className="pt-5">
          <h1 className="editProfileRowHeader pb-2">Education</h1>
          <div className="row pb-2">
            <div className="col">
              <label className="editProfileLabel">School Name</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_SchoolName}
                disabled
              />
            </div>
            <div className="col">
              <label className="editProfileLabel">Field of Study</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_FieldOfStudy}
                disabled
              />
            </div>
          </div>
          <div className="row pb-2">
            <div className="col">
              <label className="editProfileLabel">Education Level</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_EduLevel}
                disabled
              />
            </div>
            <div className="col">
              <label className="editProfileLabel">Education Status</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_EduStatus}
                disabled
              />
            </div>
          </div>  
          <div className="row pb-2">
            <div className="col">
              <label className="editProfileLabel">Education From</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_EduFrom}
                disabled
              />
            </div>
            <div className="col">
              <label className="editProfileLabel">Education To</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_EduTo}
                disabled
              />
            </div>
          </div>
        </Row>

        <Row className="pt-5">
        <div className="col-lg">
        <h1 className="editProfileRowHeader pb-2">Resume</h1>
        <label className="editProfileLabel">Resume Status</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_ResumeStatus}
                disabled
              />
        </div>
        <div className="col-lg">
        <h1 className="editProfileRowHeader pb-2">Contact Info</h1>
        <label className="editProfileLabel">Contact Number</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_PhoneNo}
                disabled
              />
        </div>
        </Row>

        <Row className="pt-5">
          <h1 className="editProfileRowHeader pb-2">Work Experience</h1>
          <div className="row pb-2">
            <div className="col">
              <label className="editProfileLabel">Job Title</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_JobTitle}
                disabled
              />
            </div>
            <div className="col">
              <label className="editProfileLabel">Company Name</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_Company}
                disabled
              />
            </div>
          </div>
          <div className="row pb-2">
            <div className="col">
              <label className="editProfileLabel">Job Status</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_JobStatus}
                disabled
              />
            </div>
          </div>
        </Row>

        <Row className="pt-5">
        <div className="col">
        <h1 className="editProfileRowHeader pb-2">Skills</h1>
        <label className="editProfileLabel">Skills</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_Skills}
                disabled
              />
        </div>
        <div className="col">
        <h1 className="editProfileRowHeader pb-2">Certifications</h1>
        <label className="editProfileLabel">Certifications</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_Certifications}
                disabled
              />
        </div>
        </Row>

        <Row className="pt-5">
          <h1 className="editProfileRowHeader pb-2">Preferences</h1>
          <div className="row pb-2">
            <div className="col">
              <label className="editProfileLabel">Base Pay</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_BasePay}
                disabled
              />
            </div>
            <div className="col">
              <label className="editProfileLabel">Pay Period</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_PayPeriod}
                disabled
              />
            </div>
          </div>
          <div className="row pb-2">
            <div className="col">
              <label className="editProfileLabel">Desired Job</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_DesiredJob}
                disabled
              />
            </div>
            <div className="col">
              <label className="editProfileLabel">Desired Job Type</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_DesiredJobType}
                disabled
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="editProfileLabel">Relocation Status</label>
              <br></br>
              <input
                className="editProdileInput"
                value={user.user_Relocation}
                disabled
              />
            </div>
          </div>
        </Row>

        <div className="text-center pt-5">
          <button
            className="editProfileBtn"
            onClick={() => editProfile(user.user_ID)}
          >
            Update Profile
          </button>
        </div>
      </div>
      {/* <div className="container pt-5 pb-5">
        <div className="text-center">
          <button
            className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2"
            onClick={() => editProfile(user.user_ID)}
          >
            Update You Profile {user.user_Fname}
          </button>
        </div>
        <br></br>

        <div className="container">
          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Name</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>First Name: </strong>
                {user.user_Fname}
              </p>
              <p>
                <strong>Last Name: </strong>
                {user.user_Lname}
              </p>
            </div>
          </Row>
          <br></br>

          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Contact Information</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>Phone Number: </strong>
                {user.user_PhoneNo}
              </p>
            </div>
          </Row>
          <br></br>

          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Location</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>Country: </strong>
                {user.user_Country}
              </p>

              <p>
                <strong>Street Address: </strong>
                {user.user_StAddress}
              </p>

              <p>
                <strong>City: </strong>
                {user.user_City}
              </p>

              <p>
                <strong>Postal Code: </strong>
                {user.user_PostalCode}
              </p>
            </div>
          </Row>
          <br></br>

          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Education</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>Education Level: </strong>
                {user.user_EduLevel}
              </p>

              <p>
                <strong>Field of Study: </strong>
                {user.user_FieldOfStudy}
              </p>

              <p>
                <strong>School Name: </strong>
                {user.user_SchoolName}
              </p>

              <p>
                <strong>Education Status: </strong>
                {user.user_EduStatus}
              </p>

              <p>
                <strong>Education From: </strong>
                {user.user_EduFrom}
              </p>

              <p>
                <strong>Education To: </strong>
                {user.user_EduTo}
              </p>
            </div>
          </Row>
          <br></br>

          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Work Experience</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>Job Title: </strong>
                {user.user_JobTitle}
              </p>

              <p>
                <strong>Company: </strong>
                {user.user_Company}
              </p>

              <p>
                <strong>Job Status: </strong>
                {user.user_JobStatus}
              </p>

              <p>
                <strong>Job From: </strong>
                {user.user_JobFrom}
              </p>

              <p>
                <strong>Job To: </strong>
                {user.user_JobTo}
              </p>

              <p>
                <strong>Job Description: </strong>
                {user.user_JobDesc}
              </p>
            </div>
          </Row>
          <br></br>

          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Skills</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>Skills: </strong>
                {user.user_Skills}
              </p>
            </div>
          </Row>
          <br></br>

          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Certifications</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>Certifications: </strong>
                {user.user_Certifications}
              </p>
            </div>
          </Row>
          <br></br>

          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Resume</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>Resume Status: </strong>
                {user.user_ResumeStatus}
              </p>
            </div>
          </Row>
          <br></br>

          <Row className="formInput p-2">
            <div className="col-lg">
              <h4>Preferences</h4>
            </div>
            <div className="col-lg">
              <p>
                <strong>Base Pay: </strong>
                {user.user_BasePay}
              </p>

              <p>
                <strong>Pay Period: </strong>
                {user.user_PayPeriod}
              </p>

              <p>
                <strong>Desired Job: </strong>
                {user.user_DesiredJob}
              </p>

              <p>
                <strong>Relocation Status: </strong>
                {user.user_Relocation}
              </p>

              <p>
                <strong>Desired Job Type: </strong>
                {user.user_DesiredJobType}
              </p>
            </div>
          </Row>
          <br></br>
        </div>
      </div> */}

      {/* <Footer /> */}
    </div>
  );
}

export default EditProfile;
