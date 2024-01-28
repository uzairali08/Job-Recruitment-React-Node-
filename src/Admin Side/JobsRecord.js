import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "../Sidebar/AdminSidebar";
import Header from "../header";
import Footer from "../footer";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function JobsRecord() {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    fetchJobs();
    fetchCompanies();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/FetchAllCompanyJobs"
      );
      const data = await response.json();
      setJobs(data);
      checkPausedJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/FetchAllCompanyNames"
      );
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const checkPausedJobs = async (jobs) => {
    try {
      const promises = jobs.map((job) =>
        fetch(`http://localhost:5000/api/CheckJobPauseStatus/${job.job_ID}`)
      );
      const responses = await Promise.all(promises);
      const results = await Promise.all(
        responses.map((response) => response.json())
      );

      const updatedJobs = jobs.map((job, index) => {
        return {
          ...job,
          paused: results[index].paused,
        };
      });

      setJobs(updatedJobs);
    } catch (error) {
      console.error("Error checking paused jobs:", error);
    }
  };

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  const handleShowAllJobs = () => {
    setSelectedCompany("");
    setSelectedLocation("");
    setSelectedTitle("");
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
  };

  const handlePauseJob = async (job_ID) => {
    try {
      const response = await fetch("http://localhost:5000/api/PauseJob/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ job_ID, status: "Paused" }),
      });
      if (response.ok) {
        // Job paused successfully
        const updatedJobs = jobs.map((job) => {
          if (job.job_ID === job_ID) {
            return {
              ...job,
              paused: true,
            };
          }
          return job;
        });
        setJobs(updatedJobs);
      } else {
        console.error("Error pausing job:", response.status);
      }
    } catch (error) {
      console.error("Error pausing job:", error);
    }
  };

  const handleResumeJob = async (job_ID) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/DeleteJobPause/${job_ID}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Job resume successful
        const updatedJobs = jobs.map((job) => {
          if (job.job_ID === job_ID) {
            return {
              ...job,
              paused: false,
            };
          }
          return job;
        });
        setJobs(updatedJobs);
      } else {
        console.error("Error resuming job:", response.status);
      }
    } catch (error) {
      console.error("Error resuming job:", error);
    }
  };

  let num = 1;
  const filteredJobs = jobs.filter(
    (job) =>
      (selectedCompany ? job.comp_Name === selectedCompany : true) &&
      (selectedLocation ? job.job_Location === selectedLocation : true) &&
      (selectedTitle ? job.job_Title === selectedTitle : true)
  );

  const locations = [...new Set(jobs.map((job) => job.job_Location))];
  const titles = [...new Set(jobs.map((job) => job.job_Title))];

  return (
    <div>
      <AdminSidebar>
        <Header />
        <div className="container-fluid pt-5 pb-5">
          <h2>Jobs Record</h2>
          <div className="row">
            <div className="col-2 me-4">
              <DropdownButton variant="dark" title="Filter Jobs By Companies">
                <Dropdown.Item onClick={handleShowAllJobs}>
                  Show All Jobs
                </Dropdown.Item>
                <Dropdown.Divider />
                {companies.map((company) => (
                  <Dropdown.Item
                    key={company}
                    onClick={() => handleCompanySelect(company)}
                  >
                    {company}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <div className="col-2 me-4">
              <DropdownButton variant="dark" title="Filter Jobs By Locations">
                <Dropdown.Item onClick={handleShowAllJobs}>
                  Show All Jobs
                </Dropdown.Item>
                <Dropdown.Divider />
                {locations.map((location) => (
                  <Dropdown.Item
                    key={location}
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <div className="col-2 me-4">
              <DropdownButton variant="dark" title="Filter Jobs By Title">
                <Dropdown.Item onClick={handleShowAllJobs}>
                  Show All Jobs
                </Dropdown.Item>
                <Dropdown.Divider />
                {titles.map((titles) => (
                  <Dropdown.Item
                    key={titles}
                    onClick={() => handleTitleSelect(titles)}
                  >
                    {titles}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
          </div>

          <br></br>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Company Name</th>
                <th>Company Email</th>
                <th>Job Title</th>
                <th>Job Location</th>
                <th>Job Type</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job) => (
                <tr key={job.job_ID}>
                  <td>{num++}</td>
                  <td>{job.comp_Name}</td>
                  <td>{job.comp_Email}</td>
                  <td>{job.job_Title}</td>
                  <td>{job.job_Location}</td>
                  <td>{job.job_Type}</td>
                  <td>
                    {job.paused ? (
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-success mx-1"
                        onClick={() => handleResumeJob(job.job_ID)}
                      >
                        Resume
                      </button>
                    ) : (
                      <button
                        className="btn btn-pill text-light shadow-lg rounded bg-dark mx-1"
                        onClick={() => handlePauseJob(job.job_ID)}
                      >
                        Pause
                      </button>
                    )}
                    <button className="btn btn-pill text-light shadow-lg rounded bg-danger mx-1">
                      Delete
                    </button>
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

export default JobsRecord;
