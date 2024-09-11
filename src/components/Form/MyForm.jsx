import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function MyForm() {
  return (
    <div className='p-4 shadow-sm '>
      <Row className='mb-3'>
        {/* Your Name and Email on the same row */}
        <Col md={6}>
          <FloatingLabel
            controlId="floatingInputName"
            label="Your Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Your Name" />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
      </Row>

      {/* Subject and Message each on its own row */}
      <Row className='mb-3'>
        <Col>
          <FloatingLabel
            controlId="floatingInputSubject"
            label="Subject"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Subject" />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
          <FloatingLabel controlId="floatingTextareaMessage" label="Message">
            <Form.Control
              as="textarea"
              placeholder="Leave a message here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Col>
      </Row>
      
      {/* Centering the button */}
      <Row className="mt-3">
        <Col className="d-flex justify-content-center">
          <Button variant="primary" style={{ backgroundColor: '#3fbbc0' }} className='border-0 p-2 px-3'>
            Send Message
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default MyForm;
