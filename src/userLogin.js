import './App.css';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function UserLogin() {
  return (
    <div>
      <div class="container register-form col-md-5 pt-5 pb-5">
        <div class="form">
          <div class="note">
            <h2>Login to Get a Job</h2>
          </div>
        </div>
        <div class="form-content register-content" style={{ backgroundColor: "white" }}>
          {/* <img src={image} width={"250px"} /> */}
          <div class="col-sm-10 offset-1 p-2">
            <div class="loginn-app text-center">
              {" "}
              <br></br>
              <label style={{float:"left"}}>Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
              />
              <label style={{float:"left"}}>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <br />
              <button className="btn btn-pill text-light shadow-lg rounded bg-dark w-25" type="button">Login</button>
              {/* <span
              type="button"
                className="signupBtn col-5"
              >
                Login
              </span> */}
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
