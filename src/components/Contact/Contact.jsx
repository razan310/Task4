import { Col, Row } from 'react-bootstrap';
import Title from '../Counter/Title/Title';
import MyForm from '../Form/MyForm';
import Details from './Getails/Details';
import dataContact from './dataContact';

function Contact({ data }) {
  return (
    <>
      {/* Title Component */}
      <Title title={"Contact"} desc={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"} />
      
      {/* Map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.3319827429596!2d-80.12284138450198!3d25.94203768358164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab23692c5a6d%3A0x2b13edc62cc50d24!2sSunny%20Isles%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2seg!4v1692240000000!5m2!1sen!2seg"
          style={{ border: 0, borderRadius: '0px', width: '100%', height: '370px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>

      {/* توزيع العمودين */}
      <Row className="p-5">
        <Col md={6}>
          <Details data={dataContact}></Details>
        </Col>
        <Col md={6}>
          <MyForm />
        </Col>
      </Row>
    </>
  );
}

export default Contact;
