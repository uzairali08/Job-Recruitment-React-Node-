import Header from "../header";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "../Sidebar/AdminSidebar";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
function JobSeekersRecord() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/GetAllUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  let num = 1;
  return (
    <div>
      <AdminSidebar>
        <Header />
        <div className="container-fluid pt-5 pb-5">
          <h2>Job Seekers Record</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Phone Number</th>
                {/* <th>Operation</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{num++}</td>
                  <td>{user.user_Fname + " " + user.user_Lname}</td>
                  <td>{user.user_Email}</td>
                  <td>{user.user_Country}</td>
                  <td>{user.user_PhoneNo}</td>
                  {/* <td>
                    <button className="btn btn-pill text-light shadow-lg rounded bg-danger mx-2">
                      Blacklist
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Footer />
      </AdminSidebar>
    </div>
  );
}

export default JobSeekersRecord;
