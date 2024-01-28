import './App.css';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function CompanyRegister() {
  return (
    <div>
        <div class="container register-form col-md-5 pt-5 pb-5">
          <div class="form" style={{ backgroundColor: "#fff"}}>
            <div class="note">
              <h2>Join to Hire a Team</h2>
            </div>

            <div class="form-content register-content" style={{ backgroundColor: "white" }}>
              <div class="col-sm-12">
                <div>
                <label style={{float:"left"}}>First Name*</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name *"
                  />
                  <label style={{float:"left"}}>Last Name*</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name *"
                  />
                  <label style={{float:"left"}}>Email*</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email *"
                  />
                  <label style={{float:"left"}}>CNIC Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="CNIC Number"
                  />
                  <label style={{float:"left"}}>Password*</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password *"
                  />
                  <label style={{float:"left"}}>Confirm Password*</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password *"
                  />

                  <div className="genderRadio offset-2">
                    <h5>Gender:</h5>
                    <input
                      style={{ marginLeft: "15px" }}
                      type="radio"
                      value="Male"
                      name="gender"
                    />{" "}
                    <p style={{ marginLeft: "5px" }}>Male</p>
                    <input
                      style={{ marginLeft: "15px" }}
                      type="radio"
                      value="Female"
                      name="gender"
                    />{" "}
                    <p style={{ marginLeft: "5px" }}>Female</p>
                    <input
                      style={{ marginLeft: "15px" }}
                      type="radio"
                      value="Other"
                      name="gender"
                    />{" "}
                    <p style={{ marginLeft: "5px" }}>Other</p>
                  </div>

                  <a href="#" style={{textAlign:"center"}}><em>Already have an Account! Login Now!!!</em></a> <br></br>
                  <br></br>

                  <button className="btn btn-pill text-light shadow-lg rounded bg-dark w-25" type="button">Login</button>
                  {/* <span type="button" onClick={signUp} className="signupBtn">
                    Register / Sign-Up
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CompanyRegister;
