import React, { useState } from "react";
import "./App.css";
import "./Login.css";
const JobSearchForm = () => {
  const [minimumPay, setMinimumPay] = useState("");
  const [desiredPay, setDesiredPay] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [relocation, setRelocation] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <div class="container Card col-lg-4 pt-2  ">
        <h3 className="text-center loginHeading">
          What kind of job are you looking for?
        </h3>
        <form onSubmit={handleSubmit} noValidate validated={validated}>
          <div className="form-group mt-3">
            <label htmlFor="minimumPay" style={{ color: 'black' }}>Minimum Pay Base</label>
            <input
              type="text"
              id="minimumPay"
              value={minimumPay}
              className="form-control loginInput "
              onChange={(e) => setMinimumPay(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="desiredPay" style={{ color: 'black' }}>Desired Pay Base</label>
            <select
              id="desiredPay"
              value={desiredPay}
              className="form-control loginInput"
              onChange={(e) => setDesiredPay(e.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option value="10000">10,000</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="jobTitle" style={{ color: 'black' }}>Describe Job Title</label>
            <select
              className="form-control loginInput"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="relocation" style={{ color: 'black' }}>Relocation</label>
            <input
              type="text"
              className="form-control loginInput"
              id="relocation"
              value={relocation}
              onChange={(e) => setRelocation(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <p>
              <button type="submit" className="LoginBtn">
                Save
              </button>
            </p>
            <button className="commonBtn">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSearchForm;
