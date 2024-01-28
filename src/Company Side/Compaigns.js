import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sidebar2 from '../Sidebar/sidebar2';
import Header from '../header';
import Chatbox from '../Chat box/Chatbox';
import Messagebox from '../Chat box/Messagebox';

function Compaigns() {
  return (
    <>
    <Sidebar2>
      <Header />
      <Messagebox />
    
    <Navbar bg="none">
      <Container fluid>
        <Navbar.Brand>Compaigns</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Button className='ms-lg-5' variant="outline-dark">Advertising Dashboard</Button>
          <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2">Create Compaign</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="p-3 pt-4">
        <div className='row'>
            <div className='col-lg-3'>
            <h2>Advertisement</h2>
            </div>
            <div className='col-lg-2'>
            <button className="btn btn-pill text-light shadow-lg rounded bg-dark mx-2">Updates</button>
            </div>
        </div>
        
        

        <a href="#">Show account budget</a>
        <br></br>
        <span>
        <b>Spent to Date (05/01/2023 ~ 05/08/2023):</b> US$0.00 <a href='#'>Billing Summary</a> - <b>Monthly Budget:</b> No limit set <a href='#'>Edit</a>
        </span>
    </Container>

    <div>
        <table></table>
    </div>
    </Sidebar2>
    </>
  );
}

export default Compaigns;
