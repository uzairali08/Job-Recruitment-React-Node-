import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "../Sidebar/AdminSidebar";
import Header from "../header";
import Footer from "../footer";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Table } from "react-bootstrap";
function ConsultationRecord() {
  const [consultations, setConsultations] = useState([]);
  const [dateFilter, setDateFilter] = useState(null);
  const [timeFilter, setTimeFilter] = useState(null);
  const [dateSort, setDateSort] = useState(null);
  const [timeSort, setTimeSort] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:5000/api/GetAllConsultations")
      .then((response) => response.json())
      .then((data) => setConsultations(data.response))
      .catch((err) => console.error(err));
  };

  const formatAMPM = (time) => {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(consultations);

  let num = 1;
  return (
    <div>
      <AdminSidebar>
        <Header />
        <div className="container-fluid pt-5 pb-5">
          <h2>Consultations Record</h2>
          <div className="row">
            <div className="col-1 me-5">
              <DropdownButton variant="dark" title="Sort By Date">
                <Dropdown.Item onClick={() => setDateSort("asc")}>
                  Ascending
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setDateSort("desc")}>
                  Descending
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="col-1 me-5">
              <DropdownButton variant="dark" title="Sort By Time">
                <Dropdown.Item onClick={() => setTimeSort("asc")}>
                  Ascending
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTimeSort("desc")}>
                  Descending
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <br></br>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Preferred Time</th>
                <th>Preferred Date</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {consultations
                .filter(
                  (consultation) =>
                    !dateFilter ||
                    new Date(
                      consultation.preferredDate
                    ).toLocaleDateString() === dateFilter
                )
                .filter(
                  (consultation) =>
                    !timeFilter ||
                    formatAMPM(consultation.preferredTime) === timeFilter
                )
                .sort((a, b) => {
                  if (dateSort) {
                    const dateA = new Date(a.preferredDate);
                    const dateB = new Date(b.preferredDate);
                    if (dateSort === "asc") {
                      return dateA - dateB;
                    } else if (dateSort === "desc") {
                      return dateB - dateA;
                    }
                  }
                  if (timeSort) {
                    const timeA = formatAMPM(a.preferredTime);
                    const timeB = formatAMPM(b.preferredTime);
                    if (timeSort === "asc") {
                      return timeA < timeB ? -1 : timeA > timeB ? 1 : 0;
                    } else if (timeSort === "desc") {
                      return timeA < timeB ? 1 : timeA > timeB ? -1 : 0;
                    }
                  }
                  return 0;
                })
                .map((consultation, index) => (
                  <tr key={index}>
                    <td>{num++}</td>
                    <td>{consultation.name}</td>
                    <td>{consultation.email}</td>
                    <td>{consultation.contactNumber}</td>
                    <td>{formatAMPM(consultation.preferredTime)}</td>
                    <td>
                      {new Date(
                        consultation.preferredDate
                      ).toLocaleDateString()}
                    </td>
                    <td>{consultation.message}</td>
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

export default ConsultationRecord;
