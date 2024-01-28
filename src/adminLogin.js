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
import Footer from "./footer";
function AdminLogin() {
  const navigate = useNavigate();
  function adminLogin() {
    navigate("/Statistics");
  }
  function registerBtn() {
    navigate("/AdminRegister");
  }

  // Admin Login
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const AdminAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/AdminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          admin_Email: adminEmail,
          admin_Password: adminPassword,
        }),
      });

      const data = await response.json();
      localStorage.setItem("user-info", JSON.stringify(data));

      if (response.ok) {
        // Login successful
        console.log("Admin Login Successful");
        // Redirect to another page or perform any necessary actions
        adminLogin();
      } else {
        // Login failed
        console.error("Error Occured");
      }
    } catch (error) {
      // Request error or server error
      console.error("Error Occured: ", error);
    }
  };

  return (
    <>
      <Header />
      <div class="container loginBox register-form col-md-4 mt-5 mb-5 pt-4 pb-4">
        <div>
          <div class="col-sm-10 offset-1 p-2">
            <div class="text-center">
              <h2>Admin Login</h2> <br></br>
              <label style={{ float: "left" }}>Email</label>
              <input
                type="text"
                class="form-control formInput"
                placeholder="email@example.com"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                required
              />
              <br></br>
              <label style={{ float: "left" }}>Password</label>
              <input
                type="password"
                class="form-control formInput"
                placeholder="Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              />
              <br />
              <span className="rememberMe">
                <form>
                  <input type="checkbox" /> Remember Me
                </form>

                <a href="#">Lost Password?</a>
              </span>
              <br></br>
              <br></br>
              <button className="loginBtn mb-3" onClick={AdminAuth}>
                Login
              </button>
              <span>or login with</span>
              <br></br>
              <br></br>
              <span>
                <a href="#" className="text-reset fs-3 me-3 inputIcons p-2">
                  <FaFacebook />
                </a>
                <a href="#" className="text-reset fs-3 me-3 inputIcons p-2">
                  <FaGoogle />
                </a>
                <a href="#" className="text-reset fs-3 me-3 inputIcons p-2">
                  <FaGithub />
                </a>
              </span>
              <br></br>
              <br></br>
              <span className="accountLink">
                Not registered? <a onClick={registerBtn}>Create Account</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLogin;
