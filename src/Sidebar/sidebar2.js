import React, { Component } from "react";
import { FaBars, FaUserCheck, FaBookOpen, FaUserAlt, FaHome, FaLaptop, FaMailBulk } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar2.css";

class Sidebar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isCompanyBanned: false, // New state for company ban status
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  componentDidMount() {
    // Check if the company is banned and update the state
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      if (parsedUserInfo.hasOwnProperty("company")) {
        const comp_ID = parsedUserInfo.company.comp_ID;
        fetch(`http://localhost:5000/api/IsCompanyBanned/${comp_ID}`)
          .then(response => response.json())
          .then(data => {
            this.setState({ isCompanyBanned: data.banned });
          })
          .catch(error => {
            console.error("Error checking company ban status:", error);
          });
      }
    }
  }

  render() {
    const menuItem = [
      {
        path: "/PostJob",
        name: "Post a Job",
        icon: <FaHome />,
      },
      {
        path: "/Jobs",
        name: "Jobs",
        icon: <FaBookOpen />,
      },
      // {
      //   path: "/Compaigns",
      //   name: "Compaigns",
      //   icon: <FaBookReader />,
      // },
      {
        path: "/Candidates",
        name: "Candidates",
        icon: <FaUserAlt />,
      },
      {
        path: "/Interviews",
        name: "Interviews",
        icon: <FaUserCheck />,
      },
      {
        path: "/ContactUs",
        name: "Contact Us",
        icon: <FaMailBulk />,
      },
      {
        path: "/BookAppointment",
        name: "Consult with an expert",
        icon: <FaLaptop />,
      },
    ];

    return (
      <div className="container2">
        <div style={{ width: this.state.isOpen ? "200px" : "60px" }} className="sidebar">
          <div className="top_section">
            <h3 style={{ display: this.state.isOpen ? "block" : "none" }} className="logo">
              Dashboard
            </h3>
            <div style={{ marginLeft: this.state.isOpen ? "50px" : "0px" }} className="bars">
              <FaBars onClick={this.toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => {
            // Check if the company is banned and exclude "Post a Job" if banned
            if (item.path === "/PostJob" && this.state.isCompanyBanned) {
              return null;
            }
            return (
              <NavLink to={item.path} key={index} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div className="link_text" style={{ display: this.state.isOpen ? "block" : "none" }}>
                  {item.name}
                </div>
              </NavLink>
            );
          })}
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Sidebar2;
