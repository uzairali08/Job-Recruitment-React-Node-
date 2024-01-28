import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./Loading.css";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isCompanyBanned, setIsCompanyBanned] = useState(false); // Added state for company ban status

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    if (!userInfo) {
      navigate("/Login");
      setIsLoading(false);
      return;
    }

    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      if (parsedUserInfo.hasOwnProperty("company")) {
        const allowedRoutes = [
          "/Jobs",
          "/EditJobs",
          "/DeleteJobFeedback",
          "/UpdateJob",
          "/Compaigns",
          "/Candidates",
          "/Interviews",
          "/ContactUs",
          "/PostJob",
          "/EmployerProfile",
        ];

        if (!allowedRoutes.includes(location.pathname)) {
          // alert("Access Denied! You are not permitted to access this link");
          navigate("/Jobs");
          setIsLoading(false);
        }

        // Query the API to check company ban status
        fetch(
          `http://localhost:5000/api/IsCompanyBanned/${parsedUserInfo.company.comp_ID}`
        )
          .then((response) => response.json())
          .then((data) => {
            setIsCompanyBanned(data.banned);
          })
          .catch((error) => {
            console.error("Error checking company ban status:", error);
            setIsCompanyBanned(false);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else if (parsedUserInfo.hasOwnProperty("user")) {
        const allowedRoutes = ["/JobFeed", "/ProfileSetup", "/BuildResume", "/EditProfile", "/UpdateProfile"];

        if (!allowedRoutes.includes(location.pathname)) {
          // alert("Access Denied! You are not permitted to access this link");
          navigate("/JobFeed");
          setIsLoading(false);
        }
      } else if (parsedUserInfo.hasOwnProperty("admin")) {
        const allowedRoutes = [
          "/Statistics",
          "/JobSeekersRecord",
          "/CompaniesRecord",
          "/Revenue",
          "/ConsultationRecord",
          "/JobsRecord",
        ];

        if (!allowedRoutes.includes(location.pathname)) {
          // alert("Access Denied! You are not permitted to access this link");
          navigate("/Statistics");
          setIsLoading(false);
        }
      }
    }

    // Set isLoading to false after the initial check
    setIsLoading(false);
  }, []);

  if (isLoading) {
    // You can show a loading spinner or any other placeholder
    return (
      <div className="loader-container">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  // Check if the company is banned and if the current route is '/PostJob'
  if (isCompanyBanned && location.pathname === "/PostJob") {
    navigate("/Jobs"); // Redirect to '/Jobs' if company is banned and trying to access '/PostJob'
    return null;
  }

  return <Component />;
}

export default Protected;
