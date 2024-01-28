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

function Interviews() {
  return (
    <>
    <Sidebar2>
      <Header/>
    
    <Messagebox />
    <Navbar bg="none">
      <Container fluid className='pt-4'>
        <Navbar.Brand>Interviews</Navbar.Brand>
        
      </Container>
    </Navbar>
    <Row>
        <div className='col-4 p-4'>
            <h4>Interviews</h4>
            <button className='btn'>Upcoming 0</button>
            <button className='btn'>Past 0</button>
        </div>
        <div className='col-8 p-4'></div>
    </Row>
    <Footer/>
    </Sidebar2>
    </>
  );
}

export default Interviews;
