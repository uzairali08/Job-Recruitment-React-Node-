import './App.css';
import './Login.css';
import { FaBeer, FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Header from './header';
import Footer from './footer';
function AdminRegister() {
  const navigate = useNavigate();
  function loginButton() {
    navigate("/AdminLogin");
  }

    const [adminEmail, setAdminEmail] = useState('');
    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [message, setMessage] = useState('');

    const AdminRegister = async (e) => {
      e.preventDefault();
      
      const response = await fetch('http://localhost:5000/api/AdminRegister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin_Email: adminEmail,
        admin_Name: adminName,
        admin_Password: adminPassword
      })
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
    <div class="container loginBox register-form col-md-4 mt-5 mb-5 pt-4 pb-4">      
    <div>
        <div class="col-sm-10 offset-1 p-2">
          <div class="text-center">
          <h2>Join as Admin</h2>
          <form onSubmit={AdminRegister}>
            {" "}
            <br></br>
            <label style={{float:"left"}}>Email</label>
            <input
              type="text"
              class="form-control formInput"
              placeholder="email@example.com"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
            />
            <br></br>
            <label style={{float:"left"}}>Name</label>
            <input
              type="text"
              class="form-control formInput"
              placeholder="Name"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              required
            />
            <br></br>
            <label style={{float:"left"}}>Password</label>
            <input
              type="password"
              class="form-control formInput"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />
            <br />
            <label style={{float:"left"}}>Confirm Password</label>
            <input
              type="password"
              class="form-control formInput"
              placeholder="Confirm Password"
            />
            <br />
            <span className='rememberMe'>
                <form>
                <input type="checkbox" /> I agree to the terms and conditions
                </form>
            </span>
            
            <br></br><br></br>
            <button className="loginBtn mb-3" type="submit">Signin</button>
            <span>or</span>
            <br></br>
            <br></br>
            <span>
            <a href='#' className='text-reset fs-3 me-3 inputIcons p-2'><FaFacebook /></a>
            <a href='#' className='text-reset fs-3 me-3 inputIcons p-2'><FaGoogle /></a>
            <a href='#' className='text-reset fs-3 me-3 inputIcons p-2'><FaGithub /></a>
            </span>
            <br></br>
            <br></br>
            <span className='accountLink'>Already have an account? <a onClick={AdminRegister}>Login</a></span>
            {/* <span
            type="button"
              className="signupBtn col-5"
            >
              Login
            </span> */}
            </form>
          </div>
        </div>
      </div> 

    </div>
    <Footer />
    </>
  );
}

export default AdminRegister;
