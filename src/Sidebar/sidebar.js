import { FaBeer, FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, } from 'react-icons/fa';
import {BsSpeedometer} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css'
import { useState } from 'react';

function SideBar() {
    const [navCollapse, setNavCollapse] = useState(false);
    const [smallNavCollapse, setSmallNavCollapse] = useState(false);
  return (
    <>
    <div className=''>
        <nav className='nav'>
            <div className='logo'>
            <h2>Code With Uzair</h2>
            <i onClick={e => setNavCollapse(!navCollapse)}><FaBeer /></i>
            <i onClick={e => setSmallNavCollapse(!smallNavCollapse)}><FaBeer /></i>
            </div>
            <ul>
                <li>Home</li>
                <li>Blog</li>
            </ul>
        </nav>
        <div className='sidebar-content'>
        <div className={`sidebar-container ${navCollapse ? "navCollaps" : ""}`}>
            <div className='nav-option option1'>
                <i className=''><FaBeer /></i>
                <h3>Dashboard</h3>
            </div>

            <div className='nav-option option1'>
                <i className='Bs Bs-BsSpeedometer'><FaBeer /></i>
                <h3>Dashboard</h3>
            </div>

            <div className='nav-option option1'>
                <i className='Bs Bs-BsSpeedometer'><FaBeer /></i>
                <h3>Articles</h3>
            </div>

            <div className='nav-option option1'>
                <i className='Bs Bs-BsSpeedometer'><FaBeer /></i>
                <h3>Report</h3>
            </div>

            <div className='nav-option option1'>
                <i className='Bs Bs-BsSpeedometer'><FaBeer /></i>
                <h3>Settings</h3>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default SideBar;
