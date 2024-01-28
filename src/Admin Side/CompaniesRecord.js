import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "../Sidebar/AdminSidebar";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import { Table } from "react-bootstrap";

function CompaniesRecord() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/GetAllCompanies")
      .then((response) => response.json())
      .then((data) => {
        // Fetch the ban status for each company
        const fetchBanStatusPromises = data.map((company) =>
          fetch(`http://localhost:5000/api/IsCompanyBanned/${company.comp_ID}`)
            .then((response) => response.json())
            .then((result) => {
              // Add the ban status to the company object
              company.banned = result.banned;
              return company;
            })
        );

        // Wait for all the ban status requests to finish
        Promise.all(fetchBanStatusPromises)
          .then((updatedCompanies) => {
            setCompanies(updatedCompanies);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  const handleBanClick = (comp_ID, index) => {
    const storedUserInfo = localStorage.getItem("user-info");
    const userInfo = JSON.parse(storedUserInfo);
    const admin_ID = userInfo.admin.admin_ID;
    const status = "Banned";

    // Send POST request to store ban information
    fetch("http://localhost:5000/api/AccountBan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ admin_ID, comp_ID, status }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Account ban stored successfully");

        // Update the companies array to reflect the ban
        const updatedCompanies = [...companies];
        updatedCompanies[index].banned = true;
        setCompanies(updatedCompanies);
      })
      .catch((err) => console.error(err));
  };

  const handleUnbanClick = (comp_ID, index) => {
    // Send DELETE request to remove ban information
    fetch(`http://localhost:5000/api/DeleteAccountBan/${comp_ID}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Account ban deleted successfully");

        // Update the companies array to reflect the unban
        const updatedCompanies = [...companies];
        updatedCompanies[index].banned = false;
        setCompanies(updatedCompanies);
      })
      .catch((err) => console.error(err));
  };

  let num = 1;
  return (
    <div>
      <AdminSidebar>
        <Header />
        <div className="container-fluid pt-5 pb-5">
          <h2>Companies Record</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Company Name</th>
                <th>Manager Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index}>
                  <td>{num++}</td>
                  <td>{company.comp_Name}</td>
                  <td>{company.comp_ManagerName}</td>
                  <td>{company.comp_Email}</td>
                  <td>{company.comp_PhoneNo}</td>
                  <td>
                    {company.banned ? (
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-success mx-2"
                        onClick={() => handleUnbanClick(company.comp_ID, index)}
                      >
                        Avert Post
                      </button>
                    ) : (
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-danger mx-2"
                        onClick={() => handleBanClick(company.comp_ID, index)}
                      >
                        Prevent Post
                      </button>
                    )}
                  </td>
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

export default CompaniesRecord;
