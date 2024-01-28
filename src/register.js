import "./App.css";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import {
  FaBeer,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  function loginButton() {
    navigate("/Login");
  }
  const [text, setText] = useState("Join to Hire a Team");
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [active, setActive] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handle1 = () => {
    if (show2) {
      setShow1(!show1);
      setShow2(!show2);
      setActive(false);
      setText("Join to Hire a Team");
    }
  };

  const handle2 = () => {
    if (show1) {
      setShow1(!show1);
      setShow2(!show2);
      setText("Join to Get a Job");
    }
  };

  // User Registration
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const UserRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/UserRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_Email: userEmail,
        user_Password: userPassword,
      }),
    });

    const data = await response.json();

    if (data.error) {
      setMessage(data.error);
    } else {
      setMessage(data.success);
      loginButton();
    }
  };

  // Company Registration
  const [compEmail, setCompEmail] = useState("");
  const [compPassword, setCompPassword] = useState("");
  const [confirmPassword, setCompConPassword] = useState("");

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    setPasswordMatch(e.target.value === userConfirmPassword);
  };
  const handleUserConfirmPasswordChange = (e) => {
    setUserConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === userPassword);
  };

  const handlePasswordChange = (e) => {
    setCompPassword(e.target.value);

    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setCompConPassword(e.target.value);

    setPasswordMatch(e.target.value === compPassword);
  };

  const CompanyRegister = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/CompanyRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comp_Email: compEmail,
        comp_Password: compPassword,
      }),
    });

    const data = await response.json();

    if (data.error) {
      setMessage(data.error);
    } else {
      setMessage(data.success);
      loginButton();
    }
  };

  return (
    <>
      <Header />
      <div>
        <div class="container loginBox Card col-md-4 mt-2 pt-4 pb-4">
          <div class="note pb-3">
            <span className="loginHeading ">{text}</span>
            <div className="pt-3">
              <button className="LoginBtn mx-2" onClick={handle1}>
                Hire a Team
              </button>
              <button className="LoginBtn mx-2" onClick={handle2}>
                Apply for Jobs
              </button>
            </div>
          </div>

          {show1 && (
            <div>
              <div class="col-sm-10 offset-1 p-2">
                <div class="text-center">
                  <div className="text-center  form-group">
                    <p>
                      {" "}
                      <input
                        type="email"
                        value={compEmail}
                        onChange={(e) => setCompEmail(e.target.value)}
                        required
                        className="form-control loginInput "
                        placeholder="Email"
                      />
                    </p>
                    <p>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={compPassword}
                          onChange={handlePasswordChange}
                          required
                          className="form-control loginInput"
                          placeholder="Password"
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text text-center"
                            style={{
                              cursor: "pointer",
                              border: "none",
                              backgroundColor: "transparent",
                              position: "absolute",
                              top: "28px",
                              right: "0",
                              textAlign: "center",
                            }}
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <BsFillEyeFill />
                            ) : (
                              <BsFillEyeSlashFill />
                            )}
                          </span>
                        </div>
                      </div>
                    </p>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                        className="form-control loginInput"
                        placeholder="confirm Password"
                      />
                      <div className="input-group-append">
                        <span
                          className="input-group-text text-center"
                          style={{
                            cursor: "pointer",
                            border: "none",
                            backgroundColor: "transparent",
                            position: "absolute",
                            top: "28px",
                            right: "0",
                            textAlign: "center",
                          }}
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? (
                            <BsFillEyeFill />
                          ) : (
                            <BsFillEyeSlashFill />
                          )}
                        </span>
                      </div>
                    </div>
                    {!passwordMatch && (
                      <p className="text-danger">
                        Password and Confirm Password do not match
                      </p>
                    )}
                  </div>

                  <div className="rememberMe pt-2">
                    <form>
                      <input type="checkbox" /> I agree to the terms and
                      conditions
                    </form>
                  </div>

                  <br></br>
                  <br></br>
                  {message && <p>{message}</p>}
                  <button
                    className="loginBtn mb-3"
                    onClick={CompanyRegister}
                    disabled={!passwordMatch}
                  >
                    Signup
                  </button>
                  <div className="text-with-lines py-3">
                    <div className="line"></div>
                    <span className="text">Or continue with</span>
                    <div className="line"></div>
                  </div>
                  <div className=" d-flex justify-content-center gap-3 ">
                    <div>
                      <button className="inputIcons">
                        <p className="icons">
                          {" "}
                          <FcGoogle fill="#3B5998" size={20} />
                          <span>Google</span>
                        </p>
                      </button>
                    </div>
                    <button className=" inputIcons  ">
                      <p className="icons ">
                        {" "}
                        <FaFacebook fill="#3B5998" size={20} />
                        <span>Facebook</span>{" "}
                      </p>
                    </button>
                  </div>
                  <div className="accountLink pt-3">
                    Already have an account? <a onClick={loginButton}>Login</a>
                  </div>
                  {/* <p>{message}</p> */}
                </div>
              </div>
            </div>
          )}

          {show2 && (
            <div>
              <div class="col-sm-10 offset-1 p-2">
                <div class="text-center">
                  <div className="text-center  form-group">
                    <p>
                      {" "}
                      <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                        className="form-control loginInput "
                        placeholder="Email"
                      />
                    </p>
                    <p>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={userPassword}
                          onChange={handleUserPasswordChange}
                          required
                          className="form-control loginInput"
                          placeholder="Password"
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text text-center"
                            style={{
                              cursor: "pointer",
                              border: "none",
                              backgroundColor: "transparent",
                              position: "absolute",
                              top: "28px",
                              right: "0",
                              textAlign: "center",
                            }}
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <BsFillEyeFill />
                            ) : (
                              <BsFillEyeSlashFill />
                            )}
                          </span>
                        </div>
                      </div>
                    </p>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={userConfirmPassword}
                        onChange={handleUserConfirmPasswordChange}
                        required
                        className="form-control loginInput"
                        placeholder="Confirm Password"
                      />
                      <div className="input-group-append">
                        <span
                          className="input-group-text text-center"
                          style={{
                            cursor: "pointer",
                            border: "none",
                            backgroundColor: "transparent",
                            position: "absolute",
                            top: "28px",
                            right: "0",
                            textAlign: "center",
                          }}
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? (
                            <BsFillEyeFill />
                          ) : (
                            <BsFillEyeSlashFill />
                          )}
                        </span>
                      </div>
                    </div>
                    {!showConfirmPassword ||
                      (!showPassword && (
                        <p className="text-danger">
                          Password and Confirm Password do not match
                        </p>
                      ))}
                  </div>

                  <div className="rememberMe pt-2">
                    <form>
                      <input type="checkbox" /> I agree to the terms and
                      conditions
                    </form>
                  </div>

                  <br></br>
                  <br></br>
                  {message && <p>{message}</p>}
                  <button className="loginBtn mb-3" onClick={UserRegister}>
                    Signup
                  </button>
                  <div className="text-with-lines py-3">
                    <div className="line"></div>
                    <span className="text">Or continue with</span>
                    <div className="line"></div>
                  </div>
                  <div className=" d-flex justify-content-center gap-3 ">
                    <div>
                      <button className="inputIcons">
                        <p className="icons">
                          {" "}
                          <FcGoogle fill="#3B5998" size={20} />
                          <span>Google</span>
                        </p>
                      </button>
                    </div>
                    <button className=" inputIcons  ">
                      <p className="icons ">
                        {" "}
                        <FaFacebook fill="#3B5998" size={20} />
                        <span>Facebook</span>{" "}
                      </p>
                    </button>
                  </div>
                  <div className="accountLink pt-3">
                    Already have an account? <a onClick={loginButton}>Login</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
