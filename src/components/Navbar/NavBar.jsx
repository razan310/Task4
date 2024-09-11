import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { TbClockHour4 } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import './NavBar.css';
import { logo, navItems } from './navData'; 

function NavBar({ btn }) {
  return (
    <>
      <div className='fixed-top' id="navbar1">
      <div className="bg-top" style={{width:"100vw"}}>
        <Container fluid className="px-md-5 px-sm-0">
          <Row className="align-items-center">
            <Col md={6} className="d-none d-md-flex  text-light align-items-center ps-3 gap-1">
              <TbClockHour4 />
              <p className="mb-0">Monday - Saturday, 8AM to 10PM</p>
            </Col>
            <Col md={6} className="text-light text-center text-md-end d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-end pe-md-3 gap-1">
              <IoPhonePortraitOutline />
              <p className="mb-0">Call us now +1 5589 55488 55</p>
            </Col>
          </Row>
        </Container>
          <Navbar expand="lg" className="bg-nav-color pb-md-5 px-md-5 pt-2">
            <Container fluid>
              <Navbar.Brand href="#" className='logo me-md-auto'>
                <img src={logo.img} alt={logo.text} />
              </Navbar.Brand>
              
              <Navbar.Toggle aria-controls="navbarScroll "  className='border-0'/>
              <Navbar.Collapse id="navbarScroll" className=''>
                <Nav
                  className="ms-auto my-2 my-lg-0 d-flex gap-lg-5 gap-sm-1"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  {/* navbar items */}
                  {navItems.map((element, index) => (
                    <Nav.Link className="navItems-color" key={index} href={`#${element.id}`}>
                      {element.name}
                    </Nav.Link>
                  ))}
                  {/* NavDropdown items */}
                  {/* ..... */}
                </Nav>

                <button type="button" className="btn bg-my-color text-light ms-3 p-2">{btn}</button>
              </Navbar.Collapse>
              
            </Container>
          </Navbar>
          </div>
          </div>
      
    </>
  );
}

export default NavBar;
