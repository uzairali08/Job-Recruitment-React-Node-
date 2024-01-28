import "./App.css";
import "./Login.css";
import {
  FaBeer,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "./header";
import { Row } from "react-bootstrap";
function AddPayment() {
  const navigate = useNavigate();
  function AddPaymentMethod() {
    // navigate("/AdminSide");
    alert('Card Added Successfully!!!');
  }
  return (
    <div className="pb-5">
      <Header />
      <div class="container loginBox register-form col-md-4 mt-5 mb-5 pt-4">
        <div>
          <div class="col-sm-10 offset-1 p-2">
            <div class="text-center">
              <h2>Add Payment Method</h2> <br></br>
              <label style={{ float: "left" }}>Currency</label>
              <select
                class="form-select form-control formInput"
                aria-label="Default select example"
              >
                <option selected>Currency</option>
                <option value="1">Dollar $</option>
                <option value="2">Euro</option>
                <option value="3">Pkr</option>
              </select>
              <br></br>
              <label style={{ float: "left" }}>Card Number</label>
              <input
                type="number"
                class="form-control formInput"
                placeholder="0000-0000-0000-0000"
              />
              <br />
              <Row>
                <div className="col">
                  <label style={{ float: "left" }}>Expires Date</label>
                  <input
                    type="date"
                    class="form-control formInput"
                    placeholder="0000-0000-0000-0000"
                  />
                </div>
                <div className="col">
                  <label style={{ float: "left" }}>Expires Date</label>
                  <input
                    type="number"
                    class="form-control formInput"
                    placeholder="0000"
                  />
                </div>
              </Row>
              <br></br>
              <label style={{ float: "left" }}>Country</label>
              <select
                class="form-select form-control formInput"
                aria-label="Default select example"
              >
                <option selected>Country</option>
                <option value="1">Pakistan</option>
                <option value="2">India</option>
                <option value="3">China</option>
              </select>

              <br></br>
              <br></br>
              <button className="loginBtn mb-3" onClick={AddPaymentMethod}>
                Add Card
              </button>
              
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPayment;
