import "./BookAppointment.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function BookAppointment() {

  const navigate = useNavigate();
  function cancelBtn(){
    navigate("/JobFeed");
  }
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the request body
    const requestBody = {
      name,
      email,
      contactNumber,
      preferredTime: formatTime(preferredTime),
      preferredDate: formatDate(preferredDate), // Format the date value before sending
      message,
    };

    const storedUserInfo = localStorage.getItem("user-info");
    const userInfo = JSON.parse(storedUserInfo);

    if (userInfo && userInfo.company) {
      requestBody.comp_ID = userInfo.company.comp_ID;
    } else if (userInfo && userInfo.user) {
      requestBody.user_ID = userInfo.user.user_ID;
    }

    // Send the POST request to the backend API
    fetch("http://localhost:5000/api/bookAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status === 400) {
          // Bad request due to existing appointment, show error message
          alert("Appointment already exists for the selected date and time.");
          // Reset the form or perform other actions
        } else {
          response.json();
        }
      })
      .then((data) => {
        console.log(data); // Handle the response data from the backend
        // Reset the form fields
        setName("");
        setEmail("");
        setContactNumber("");
        setPreferredTime("");
        setPreferredDate("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error); // Handle any errors
      });
  };

  const formatTime = (timeString) => {
    // Format the time value to match the expected format in the backend (HH:mm:ss)
    const timeParts = timeString.split(":");
    const formattedTime = `${timeParts[0].padStart(
      2,
      "0"
    )}:${timeParts[1].padStart(2, "0")}:00`;
    return formattedTime;
  };

  const formatDate = (dateString) => {
    // Format the date value to match the expected format in the backend (YYYY-MM-DD)
    const dateParts = dateString.split("-");
    const formattedDate = `${dateParts[0]}-${dateParts[1].padStart(
      2,
      "0"
    )}-${dateParts[2].padStart(2, "0")}`;
    return formattedDate;
  };

  return (
    <>
      <Header />
      <div className="">
        <div class="container col-lg-5 pt-5 pb-5">
          <div>
            <Row>
              {/* <div className="col-lg bg-dark pt-4 pb-4 text-light">
                <h2>Book an appointment with an expert</h2>
                <br></br>
                <h2>Just 3 simple steps:</h2>
                <ol>
                  <h4>
                    <li>Select your free time</li>
                  </h4>
                  <h4>
                    <li>Select relevent day</li>
                  </h4>
                  <h4>
                    <li>Book an appointment</li>
                  </h4>
                </ol>
              </div> */}
              <div className="col-lg pt-4 pb-4 appointmentFormCont">
                <div class="">
                  <h1 className="appointmentFormHeading">
                    Book an appointment with an expert{" "}
                  </h1>
                  <label className="appointmentFormLabelName">Full Name*</label>
                  <input
                    type="text"
                    class="form-control appointmentFormInputField"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br></br>
                  <label className="appointmentFormLabelEmail">Email*</label>
                  <input
                    type="email"
                    class="form-control appointmentFormInputField"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br></br>
                  <label className="appointmentFormLabelTime">
                    Preferred Time*
                  </label>
                  <input
                    type="time"
                    class="form-control appointmentFormInputField"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                  />
                  <br></br>
                  <label className="appointmentFormLabelContact">
                    Contact number*
                  </label>
                  <input
                    type="number"
                    class="form-control appointmentFormInputField"
                    placeholder="+92"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                  <br></br>
                  <label className="appointmentFormLabelDate">
                    Preferred Date*
                  </label>
                  <input
                    type="date"
                    class="form-control appointmentFormInputField"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                  <br></br>
                  <label className="appointmentFormLabelMessage">Message</label>
                  <textarea
                    class="form-control appointmentFormInputField"
                    rows={"3"}
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>

                  <br />

                  <Row>
                    <div className="col-lg">
                    <button className="appointmentCancelBtn" type="button" onClick={cancelBtn}>
                        Cancel
                      </button>
                    </div>
                    <div className="col-lg">
                      <button className="appointmentSubmitBtn" type="button" onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </Row>

                  <br></br>

                  {/* <span
            type="button"
              className="signupBtn col-5"
            >
              Login
            </span> */}
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
