import "./App.css";
import "./Login.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
function Login() {
  const navigate = useNavigate();

  function companyLogin() {
    const storedUserInfo = localStorage.getItem("user-info");
    const userInfo = JSON.parse(storedUserInfo);
    const comp_ID = userInfo.company.comp_ID;

    // Send a request to check if the comp_ID exists in the companydetails table
    fetch(`http://localhost:5000/api/EmployerDetails/${comp_ID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // Company details found, navigate to the Jobs page
          navigate("/Jobs");
        } else {
          // No company details found, navigate to the EmployerProfile page
          navigate("/EmployerProfile");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error and navigate to an error page or display an error message
      });
  }

  function userLogin() {
    const storedUserInfo = localStorage.getItem("user-info");
    const userInfo = JSON.parse(storedUserInfo);
    const user_ID = userInfo.user.user_ID;

    // Send a request to check if the user_ID exists in the userdetails table
    fetch(`http://localhost:5000/api/UserDetails/${user_ID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // User details found, navigate to the JobFeed page
          navigate("/JobFeed");
        } else {
          // No user details found, navigate to the BuildResume page
          navigate("/ProfileSetup");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error and navigate to an error page or display an error message
      });
  }

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };



  function userLogin() {
    navigate("/ProfileSetup");
  }
  function registerBtn() {
    navigate("/Register");
  }
  const [text, setText] = useState("Hire a Team");
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [active, setActive] = useState(true);

  const handle1 = () => {
    if (show2) {
      setText("Hire a Team");
      setShow1(!show1);
      setShow2(!show2);
      setActive(false);
    }
  };

  const handle2 = () => {
    if (show1) {
      setText("Apply for Jobs");
      setShow1(!show1);
      setShow2(!show2);
    }
  };

  // Company Login

  const [compEmail, setCompEmail] = useState("");
  const [compPassword, setCompPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const CompanyAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/CompanyLogin", {
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
      localStorage.setItem("user-info", JSON.stringify(data));

      if (response.ok) {
        // Login successful
        console.log(data.success);
        // Redirect to another page or perform any necessary actions
        companyLogin();
      } else {
        // Login failed
        console.error(data.error);
        setError(data.error);
      }
    } catch (error) {
      // Request error or server error
      console.error("Error:", error.message);
      setError("Server error");
    }
  };

  // User Login
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const UserAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/UserLogin", {
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
      localStorage.setItem("user-info", JSON.stringify(data));

      if (response.ok) {
        // Login successful
        console.log(data.success);
        // Redirect to another page or perform any necessary actions
        userLogin();
      } else {
        // Login failed
        console.error(data.error);
        setError(data.error);
      }
    } catch (error) {
      // Request error or server error
      // console.error("Error:", error.message);
      // setError("Server error");
      userLogin();
    }
  };
  return (
    <>
      <Header />
      <div >
        <div class="container Card col-lg-4 pt-2  ">
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
              <div class="col-sm-10 offset-1 p-2 ">
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

                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={compPassword}
                      onChange={(e) => setCompPassword(e.target.value)}
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
                  <div className="d-flex justify-content-between mt-1">
                    <p className="rememberMe">
                      <input type="checkbox" /> Remember Me
                    </p>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#D93F21",
                        fontSize: "14px",
                      }}
                    >
                      Recover Password?
                    </a>
                  </div>

                  {error && <p>{error}</p>}
                  <button className="loginBtn mb-3 mt-2" onClick={CompanyAuth}>
                    Login
                  </button>
                  <div className="text-with-lines py-3">
                    <div className="line"></div>
                    <span className="text">Or continue with</span>
                    <div className="line"></div>
                  </div>
                  <div className=" d-flex justify-content-center gap-3 ">
                    <div>
                      <button className="inputIcons">
                        <p onClick={google} className="icons">
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

                  <div className="accountLink mt-3">
                    Not registered? <a onClick={registerBtn}>Create Account</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {show2 && (
            <div>
              <div class="col-sm-10 offset-1 p-2">
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

                  <div className="input-group">
                    <input
                      type="password"
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
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
                  <div className="d-flex justify-content-between mt-1">
                    <p className="rememberMe">
                      <input type="checkbox" /> Remember Me
                    </p>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#D93F21",
                        fontSize: "14px",
                      }}
                    >
                      Recover Password?
                    </a>
                  </div>

                  {error && <p>{error}</p>}
                  <button className="loginBtn mb-3 mt-2" onClick={UserAuth}>
                    Login
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
                          <span onClick={google}>Google</span>
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

                  <div className="accountLink mt-3">
                    Not registered? <a onClick={registerBtn}>Create Account</a>
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

export default Login;
