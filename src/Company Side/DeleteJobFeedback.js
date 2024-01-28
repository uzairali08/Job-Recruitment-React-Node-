import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

function DeleteJobFeedback() {
  const navigate = useNavigate();

  const storedUserInfo = localStorage.getItem("user-info");
  const userInfo = JSON.parse(storedUserInfo);
  const comp_ID = userInfo.company.comp_ID;

  // const [comp_ID] = useState(localStorage.getItem("comp_ID")); // assuming comp_ID is stored in local storage
  const [hire, setHire] = useState("");
  const [benefical, setBenefical] = useState("");
  const [comment, setComment] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // send POST request with form data
    const response = await fetch("http://localhost:5000/api/JobDeletionFeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comp_ID, hire, benefical, comment }),
    });

    if (response.ok) {
      alert(
        "Thanks for your feedback.\nThis will help us in improving our product"
      );
      navigate("/Jobs");
    } else {
      alert("Error submitting feedback.");
    }
  }
  return (
    <>
      <Header />
      <Container>
        <div className="pt-5 pb-5">
          <div className="formContainer col-lg-6 offset-lg-3 p-4">
            <br></br>
            <h3 className="text-center">Job Deleted</h3>
            <h3 className="text-center">Why did you delete this job?</h3>
            <br></br>
            <label>Did you already hire anyone for this role?*</label>
            <div class="form-check form-control formInput mb-2 p-2">
              <input
                class="form-check-input mx-1"
                value="Yes"
                type="radio"
                name="hiredAnyone"
                id="hiredAnyone"
                onChange={() => setHire("Yes")}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check form-control formInput mb-2 p-2">
              <input
                class="form-check-input mx-1"
                value="No"
                type="radio"
                name="hiredAnyone"
                id="hiredAnyone"
                onChange={() => setHire("No")}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                No
              </label>
            </div>
            <br></br>
            <label>This job post was benefical for you company?*</label>
            <div class="form-check form-control formInput mb-2 p-2">
              <input
                class="form-check-input mx-1"
                value="Yes"
                type="radio"
                name="benefical"
                id="benefical"
                onChange={() => setBenefical("Yes")}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check form-control formInput mb-2 p-2">
              <input
                class="form-check-input mx-1"
                value="No"
                type="radio"
                name="benefical"
                id="benefical"
                onChange={() => setBenefical("No")}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                No
              </label>
            </div>
            <br></br>
            <label>How can we improve our service?</label>
            <textarea class="form-control formInput" rows={4} value={comment} onChange={e => setComment(e.target.value)}></textarea>
            <br></br>
            <Row>
              <div className="col">
                <button className="formBtn" onClick={handleSubmit}>
                  Save & continue
                </button>
              </div>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export default DeleteJobFeedback;
