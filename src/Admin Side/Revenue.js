import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "../Sidebar/AdminSidebar";
import Header from "../header";
import Footer from "../footer";
function Revenue() {
  return (
    <div>
      <AdminSidebar>
        <Header />
        <div className="container-fluid pt-5 pb-5">
          <h2>Revenue</h2>
        </div>
        <Footer />
      </AdminSidebar>
    </div>
  );
}

export default Revenue;
