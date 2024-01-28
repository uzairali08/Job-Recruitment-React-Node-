import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Slider from "./Homepage/slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./Homepage/services";
import BestPart from "./Homepage/bestPart";
import GlobalReach from "./Homepage/globalReach";
import WhyUs from "./Homepage/whyUs";
import UserReviews from "./Homepage/userReviews";
import CompanyLogin from "./companyLogin";
import UserLogin from "./userLogin";
import AdminLogin from "./adminLogin";
import CompanyRegister from "./companyRegister";
import Login from "./login";
import Register from "./register";
import SideBar from "./Sidebar/sidebar";
import SideBarMenu from "./Sidebar/sidebarMenu";
import JobSearchForm from "./jobPage";
import { SidebarMenuCollapse } from "react-bootstrap-sidebar-menu";
import Sidebar2 from "./Sidebar/sidebar2";
import Homepage from "./Homepage/homepage";
import Jobs from "./Company Side/Jobs";
import Compaigns from "./Company Side/Compaigns";
import Candidates from "./Company Side/Candidates";
import Interviews from "./Company Side/Interviews";
import ContactUs from "./Company Side/ContactUs";
import JobFeed from "./User Side/JobFeed";
import AdminSidebar from "./Sidebar/AdminSidebar.js";
import ProfileSetup from "./User Side/ProfileSetup";
import BuildResume from "./User Side/BuildResume";
import EmployerProfile from "./Company Side/EmployerProfile";
import PostJob from "./Company Side/PostJob";
import Chatbox from "./Chat box/Chatbox";
import BookAppointment from "./BookAppointment";
import Messagebox from "./Chat box/Messagebox";
import AdminRegister from "./adminRegister";
import AddPayment from "./AddPayment";
import Protected from "./Protected";
import EditJobs from "./Company Side/EditJobs";
import DeleteJob from "./Company Side/DeleteJobFeedback";
import UpdateJob from "./Company Side/UpdateJob";
import DeleteJobFeedback from "./Company Side/DeleteJobFeedback";
import Statistics from "./Admin Side/Statistics";
import CompaniesRecord from "./Admin Side/CompaniesRecord";
import JobSeekersRecord from "./Admin Side/JobSeekersRecord";
import ConsultationRecord from "./Admin Side/ConsultationRecord";
import Revenue from "./Admin Side/Revenue";
import JobsRecord from "./Admin Side/JobsRecord";
import EditProfile from "./User Side/EditProfile";
import UpdateProfile from "./User Side/UpdateProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/" element={<JobSearchForm />} /> */}
          <Route path="/Login" element={<Protected Component={Login} />} />
          <Route
            path="/Register"
            element={<Protected Component={Register} />}
          />
          <Route
            path="/CompanySide"
            element={
              <Sidebar2>
                <Header />
                <Jobs />
                <Footer />
              </Sidebar2>
            }
          />

          <Route path="Jobs" element={<Protected Component={Jobs} />} />

          <Route
            path="/Compaigns"
            element={<Protected Component={Compaigns} />}
          />

          <Route
            path="/Candidates"
            element={<Protected Component={Candidates} />}
          />

          <Route
            path="Interviews"
            element={<Protected Component={Interviews} />}
          />

          <Route
            path="ContactUs"
            element={<Protected Component={ContactUs} />}
          />

          <Route
            path="EmployerProfile"
            element={<Protected Component={EmployerProfile} />}
          />

          <Route path="PostJob" element={<Protected Component={PostJob} />} />

          <Route
            path="AdminSide"
            element={
              <AdminSidebar>
                <Header />
                <Footer />
              </AdminSidebar>
            }
          />

          <Route
            path="Statistics"
            element={<Protected Component={Statistics} />}
          />

          <Route
            path="CompaniesRecord"
            element={<Protected Component={CompaniesRecord} />}
          />

          <Route
            path="JobSeekersRecord"
            element={<Protected Component={JobSeekersRecord} />}
          />

          <Route
            path="ConsultationRecord"
            element={<Protected Component={ConsultationRecord} />}
          />

          <Route path="Revenue" element={<Protected Component={Revenue} />} />

          <Route
            path="JobsRecord"
            element={<Protected Component={JobsRecord} />}
          />

          <Route path="/JobFeed" element={<Protected Component={JobFeed} />} />

          <Route
            path="ProfileSetup"
            element={<Protected Component={ProfileSetup} />}
          />

          <Route
            path="BuildResume"
            element={<BuildResume />}
          />

          <Route path="Chatbox" element={<Chatbox />} />

          <Route path="Messagebox" element={<Messagebox />} />

          <Route path="BookAppointment" element={<BookAppointment />} />

          <Route path="AdminLogin" element={<AdminLogin />} />

          <Route path="AdminRegister" element={<AdminRegister />} />

          <Route path="AddPayment" element={<AddPayment />} />

          <Route path="EditJobs" element={<Protected Component={EditJobs} />} />

          <Route
            path="DeleteJobFeedback"
            element={<Protected Component={DeleteJobFeedback} />}
          />

          <Route
            path="UpdateJob"
            element={<Protected Component={UpdateJob} />}
          />

          <Route path="EditProfile" element={<Protected Component={EditProfile} />} />

          <Route
            path="UpdateProfile"
            element={<Protected Component={UpdateProfile} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
