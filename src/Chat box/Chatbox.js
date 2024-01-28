import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Chatbox.css'

function Chatbox() {
  return (
    <>
    <div class="container mt-4">
        <div class="card mx-auto" style={{maxWidth: "400px"}}>
            <div class="card-header bg-transparent">
                <div class="navbar navbar-expand p-0">
                    <ul class="navbar-nav me-auto align-items-center">
                        <li class="nav-item">
                            <a href="#!" class="nav-link">
                                <div class="position-relative"
                                style={{width:"50px", height:"50px", borderRadius:"2px solid #e84118", padding:"2px"}}>
                                    <img src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                                        class="img-fluid rounded-circle" alt="" />
                                    <span
                                        class="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                        <span class="visually-hidden">New alerts</span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">Nelh</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a href="#!" class="nav-link">
                                <i class="fas fa-phone-alt"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">
                                <i class="fas fa-video"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link">
                                <i class="fas fa-times"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body p-4" style={{height:"500px", overflow:"auto"}}>

                <div class="d-flex align-items-baseline mb-4">
                    <div class="position-relative avatar">
                        <img src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                            class="img-fluid rounded-circle" alt="" />
                        <span
                            class="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </div>
                    <div class="pe-2">
                        <div>
                            <div class="card chatbox-card-text d-inline-block p-2 px-3 m-1">Hi helh, are you available to chat?
                            </div>
                        </div>
                        <div>
                            <div class="small">01:10PM</div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-baseline text-end justify-content-end mb-4">
                    <div class="pe-2">
                        <div>
                            <div class="card chatbox-card-text d-inline-block p-2 px-3 m-1">Sure</div>
                        </div>
                        <div>
                            <div class="card chatbox-card-text d-inline-block p-2 px-3 m-1">Let me know when you're available?
                            </div>
                        </div>
                        <div>
                            <div class="small">01:13PM</div>
                        </div>
                    </div>
                    <div class="position-relative avatar">
                        <img src="https://nextbootstrap.netlify.app/assets/images/profiles/2.jpg"
                            class="img-fluid rounded-circle" alt="" />
                        <span
                            class="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </div>
                </div>

                <div class="d-flex align-items-baseline mb-4">
                    <div class="position-relative avatar">
                        <img src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                            class="img-fluid rounded-circle" alt="" />
                        <span
                            class="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </div>
                    <div class="pe-2">
                        <div>
                            <div class="card chatbox-card-text d-inline-block p-2 px-3 m-1">3:00pm??</div>
                        </div>
                        <div>
                            <div class="small">Edited - 01:13PM</div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-baseline text-end justify-content-end mb-4">
                    <div class="pe-2">
                        <div>
                            <div class="card chatbox-card-text d-inline-block p-2 px-3 m-1">Cool</div>
                        </div>
                        <div>
                            <div class="card chatbox-card-text p-2 px-3 m-1 mb-5">
                                <div class="row align-items-center">
                                    <div class="col-1">
                                        <a href=""><i class="fas fa-play"></i></a>
                                    </div>
                                    <div class="col">
                                        <div class="progress" style={{width:"100px", height:"4px"}}>
                                            <div class="progress-bar bg-primary" role="progressbar" style={{width:"35%"}}
                                                aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="small fw-bold">0:34</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position-relative avatar">
                        <img src="https://nextbootstrap.netlify.app/assets/images/profiles/2.jpg"
                            class="img-fluid rounded-circle" alt="" />
                        <span
                            class="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </div>
                </div>

            </div>
            <div class="card-footer bg-white position-absolute w-100 bottom-0 m-0 p-1">
                <div class="input-group">
                    <div class="input-group-text bg-transparent border-0">
                        <button class="btn btn-light text-secondary">
                            <i class="fas fa-paperclip"></i>
                        </button>
                    </div>
                    <input type="text" class="form-control border-0" placeholder="Write a message..." />
                    <div class="input-group-text bg-transparent border-0">
                        <button class="btn btn-light text-secondary">
                            <i class="fas fa-smile"></i>
                        </button>
                    </div>
                    <div class="input-group-text bg-transparent border-0">
                        <button class="btn btn-light text-secondary">
                            <i class="fas fa-microphone"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Chatbox;
