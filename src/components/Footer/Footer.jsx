import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineFacebook } from 'react-icons/md';

function Footer() {
  return (
    <div className="colorbgblue color-h p-4">
      <Container fluid>
        <Row className="">
          <Col xs={12} lg={4} md={6} >
            <h5 className='p-1  '>Medicio </h5>
            <p className='p-1 navItems-color fw-light'>A108 Adam Street</p>
            <p className='p-1 navItems-color fw-light'>New York, NY 535022</p>
            <p className='p-1 navItems-color fw-light'> <span className='color-h fw-bold'>Phone:</span> +1 5589 55488 55</p>
            <p className='p-1 navItems-color fw-light'> <span className='color-h fw-bold'>Email:</span> info@example.com</p>
            <div className='d-flex '>
             <div className='border rounded-circle border-secondary m-1 p-2'><FaXTwitter className='fs-4'/></div>
             <div className='border rounded-circle border-secondary m-1 p-2'><MdOutlineFacebook  className='fs-4'/></div>
             <div className='border rounded-circle border-secondary m-1 p-2'><FaInstagram className='fs-4'/></div>
             <div className='border rounded-circle border-secondary m-1 p-2'><FaLinkedin className='fs-4'/></div>
            </div>
          </Col>
          <Col xs={12} lg={2} md={3}>
          <h5 className='p-1 '>Useful Links </h5>
            <p className='p-1 navItems-color fw-light'>Home</p>
            <p className='p-1 navItems-color fw-light'>About us</p>
            <p className='p-1 navItems-color fw-light'>Services</p>
            <p className='p-1 navItems-color fw-light'>Terms of service</p>
            <p className='p-1 navItems-color fw-light'>Privacy policy</p>
          </Col>
          <Col xs={12} lg={2} md={3}>
          <h5 className='p-1 '>Our Services </h5>
            <p className='p-1 navItems-color fw-light'>Web Design</p>
            <p className='p-1 navItems-color fw-light'>Web Development</p>
            <p className='p-1 navItems-color fw-light'>Product Management</p>
            <p className='p-1 navItems-color fw-light'>Marketing</p>
            <p className='p-1 navItems-color fw-light'>Graphic Design</p>
          </Col>
          <Col xs={12} lg={2} md={3}>
          <h5 className='p-1 '>Hic solutasetp</h5>
            <p className='p-1 navItems-color fw-light'>Molestiae accusamus iure</p>
            <p className='p-1 navItems-color fw-light'>Excepturi dignissimos</p>
            <p className='p-1 navItems-color fw-light'>Suscipit distinctio</p>
            <p className='p-1 navItems-color fw-light'>Dilecta</p>
            <p className='p-1 navItems-color fw-light'>Sit quas consectetur</p>
          </Col>
          <Col xs={12} lg={2} md={3}>
          <h5 className='p-1 '>Nobis illum</h5>
            <p className='p-1 navItems-color fw-light'>Ipsam</p>
            <p className='p-1 navItems-color fw-light'>Laudantium dolorum</p>
            <p className='p-1 navItems-color fw-light'>Dinera</p>
            <p className='p-1 navItems-color fw-light'>Trodelas</p>
            <p className='p-1 navItems-color fw-light'>Flexo</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
