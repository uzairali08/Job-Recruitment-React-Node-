import React, { Component } from "react";
import { FaBars, FaHeadSideVirus, FaBookOpen, FaBookReader, FaHome, FaLaptop } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar2.css";

class AdminSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const menuItem = [
      {
        path: "/Statistics",
        name: "Statistics",
        icon: <FaHome />,
      },
      {
        path: "/CompaniesRecord",
        name: "Companies Record",
        icon: <FaBookOpen />,
      },
      {
        path: "/JobsRecord",
        name: "Jobs Record",
        icon: <FaBookReader />,
      },
      {
        path: "/JobSeekersRecord",
        name: "Job Seekers Record",
        icon: <FaLaptop />,
      },
      {
        path: "/ConsultationRecord",
        name: "Consultation Record",
        icon: <FaLaptop />,
      },
      // {
      //   path: "/BestPart",
      //   name: "Analytics",
      //   icon: <FaLaptop />,
      // },
      {
        path: "/Revenue",
        name: "Subscription Revenue",
        icon: <FaLaptop />,
      },
    ];

    return (
      <div className="container2">
        <div style={{ width: this.state.isOpen ? "200px" : "60px" }} className="sidebar">
          <div className="top_section">
            <h3 style={{ display: this.state.isOpen ? "block" : "none" }} className="logo">
              Admin
            </h3>
            <div style={{ marginLeft: this.state.isOpen ? "50px" : "0px" }} className="bars">
              <FaBars onClick={this.toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text" style={{ display: this.state.isOpen ? "block" : "none" }}>
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default AdminSidebar;
