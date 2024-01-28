import Header from "../header";
import Footer from "../footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "../Sidebar/AdminSidebar";
function Statistics() {
  return (
    <div>
      <AdminSidebar>
        <Header />
        <div className="container-fluid pt-5 pb-5">
          <h2>Statistics</h2>
        </div>
        <Footer />
      </AdminSidebar>
    </div>
  );
}

export default Statistics;
