// import './App.css';
// import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserReviews() {
  return (
    <div class="row">
    <div class="col-12 col-md-6 mt-5">
        <div class="profile-card mb-5">
            <div class="card bg-primary shadow-inset border-light text-center">
                <div class="card-header">
                    <div class="profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6">
                        <img src="../../assets/img/team/profile-picture-4.jpg" class="card-img-top rounded" alt="Leos Portrait" />
                    </div>
                </div>
                <div class="card-body pb-5">
                    <h3 class="h5 mb-2">Jose Leos</h3>
                    <span class="h6 font-weight-normal text-gray mb-3">Co-Founder</span>
                    <ul class="list-unstyled d-flex justify-content-center mt-3 mb-4">
                        <li>
                            <a href="#" target="_blank" aria-label="facebook social link" class="icon icon-xs icon-facebook mr-3">
                                <span class="fab fa-facebook-f"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" aria-label="twitter social link" class="icon icon-xs icon-twitter mr-3">
                                <span class="fab fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" aria-label="slack social link" class="icon icon-xs icon-slack mr-3">
                                <span class="fab fa-slack-hash"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" aria-label="dribbble social link" class="icon icon-xs icon-dribbble mr-3">
                                <span class="fab fa-dribbble"></span>
                            </a>
                        </li>
                    </ul>
                    <a class="btn btn-sm btn-primary mr-3" href="#">
                        <span class="fas fa-user-plus mr-1"></span> Follow
                    </a>
                    <a class="btn btn-sm btn-primary" href="#">
                        Message
                    </a>                                
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 mt-5">
        <div class="card bg-primary shadow-soft border-light mb-5 text-center">
            <div class="profile-image shadow-inset border border-light bg-primary p-3 rounded-circle mt-n5 mx-auto">
                <img src="../../assets/img/team/profile-picture-1.jpg" class="card-img-top shadow-soft p-3 border border-light rounded-circle" alt="Joseph Avatar" />
            </div>
            <div class="card-body">
                <h3 class="h5 mb-2">Joseph Garth</h3>
                <span class="h6 font-weight-normal text-gray mb-3">Designer</span>
                <ul class="list-unstyled d-flex justify-content-center my-3">
                    <li>
                        <a href="#" target="_blank" aria-label="facebook social link" class="icon icon-xs icon-facebook mr-3">
                            <span class="fab fa-facebook-f"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" aria-label="twitter social link" class="icon icon-xs icon-twitter mr-3">
                            <span class="fab fa-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" aria-label="slack social link" class="icon icon-xs icon-slack mr-3">
                            <span class="fab fa-slack-hash"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" aria-label="dribbble social link" class="icon icon-xs icon-dribbble mr-3">
                            <span class="fab fa-dribbble"></span>
                        </a>
                    </li>
                </ul>
                <div class="row mt-5">
                    <div class="col-4">
                        <div class="icon icon-shape icon-shape-xs icon-facebook icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                            <span class="fab fa-facebook-f"></span>
                        </div>
                        <h2 class="h5 mb-0">25K</h2>
                        <span class="small">Followers</span>
                    </div>
                    <div class="col-4">
                        <div class="icon icon-shape icon-shape-xs icon-dribbble icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                            <span class="fab fa-dribbble"></span>
                        </div>
                        <h2 class="h5 mb-0">5K</h2>
                        <span class="small">Followers</span>
                    </div>
                    <div class="col-4">
                        <div class="icon icon-shape icon-shape-xs icon-behance icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                            <span class="fab fa-behance"></span>
                        </div>
                        <h2 class="h5 mb-0">62K</h2>
                        <span class="small">Followers</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
  );
}

export default UserReviews;
