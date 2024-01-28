import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Messagebox from '../Chat box/Messagebox';
import Sidebar2 from '../Sidebar/sidebar2';
import Header from '../header';
import Footer from '../footer';

function ContactUs() {
  return (
    <>
    <Sidebar2>
      <Header />
    
    <Messagebox />
    <Row>
        <div className='col-lg-8 offset-lg-2 p-4'>

            <h3>Send us a message</h3>

            <h4>Subject *</h4>
            <p>What would you like help with?</p>
            <input
                type="text"
                class="form-control"
              />
              <p>Upto 250 characters</p>
              <br></br>

            <h4>Message *</h4>
            <p>Don't include sensitive or confidential information.</p>
            <textarea className='form-control w-100' rows="5"></textarea>
        </div>
    </Row>
    <Footer />
    </Sidebar2>
    </>
  );
}

export default ContactUs;
