import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Form } from "react-bootstrap";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import "./CompanySide.css";
import { useState } from "react";

function EmployerProfile() {
  const navigate = useNavigate();
  function jobPost() {
    navigate("/Jobs");
  }

  const [errorMessage, setErrorMessage] = useState("");
  const [companyData, setCompanyData] = useState({
    comp_Name: "",
    comp_EmpNo: "",
    comp_ManagerName: "",
    comp_PhoneNo: "",
  });

  const handleChange = (event) => {
    setCompanyData({
      ...companyData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any form field is empty
    const isEmptyForm = Object.values(companyData).some((value) => value === "");
    if (isEmptyForm) {
      setErrorMessage("Please fill in all the fields");
      return;
    }

    const storedUserInfo = localStorage.getItem("user-info");
    const userInfo = JSON.parse(storedUserInfo);
    const comp_ID = userInfo.company.comp_ID;

    fetch("http://localhost:5000/api/EmployerProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...companyData, comp_ID }),
    })
      .then((response) => response.json())
      .then((data) => {
        jobPost();
        console.log(data); // Do something with the response
        // Reset the form
        setCompanyData({
          comp_Name: "",
          comp_EmpNo: "",
          comp_ManagerName: "",
          comp_PhoneNo: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <div className="pt-5 pb-5">
          <div className="formContainer col-lg-6 offset-lg-3 p-5">
            <h3 className="text-center">Create an employer account</h3>
            <p>
              You haven't posted a job before, so you'll need to create an
              employer account.
            </p>
            <br></br>
            <label>Your company's name*</label>
            <input
              type="text"
              name="comp_Name"
              value={companyData.comp_Name}
              onChange={handleChange}
              className="form-control formInput"
            />
            <br></br>
            <label>Your company's number of employees</label>
            <select
              class="form-select form-control formInput"
              aria-label="Default select example"
              name="comp_EmpNo"
              value={companyData.comp_EmpNo}
              onChange={handleChange}
            >
              <option value="none" selected hidden>
                Select an option
              </option>
              <option value="1 to 49">1 to 49</option>
              <option value="50 to 149">50 to 149</option>
              <option value="150 to 249">150 to 249</option>
              <option value="250 to 499">250 to 499</option>
              <option value="500 to 749">500 to 749</option>
              <option value="750 to 999">750 to 999</option>
              <option value="1000+">1000+</option>
            </select>
            <br></br>
            <label>Your first and last name*</label>
            <input
              type="text"
              name="comp_ManagerName"
              value={companyData.comp_ManagerName}
              onChange={handleChange}
              class="form-control formInput"
            />
            <br></br>
            <label>Your Phone number (Not visible to joob seekers)</label>
            <input
              type="text"
              name="comp_PhoneNo"
              value={companyData.comp_PhoneNo}
              onChange={handleChange}
              class="form-control formInput"
            />
            <br></br>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button className="formBtn mb-2" onClick={handleSubmit}>
              Continue
            </button>
            <br></br>
          </div>
        </div>
      </Container>
    </>
  );
}

export default EmployerProfile;
